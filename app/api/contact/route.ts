import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/validators/contact";
import { rateLimitByIp } from "@/lib/rate-limit";

export const runtime = "nodejs"; // Nodemailer için

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]!));
}

async function verifyTurnstile(token?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret || !token) return true; // turnstile kullanmıyorsan atla
  try {
    const rsp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: new URLSearchParams({ secret, response: token }),
    }).then(r => r.json() as Promise<{ success: boolean }>);
    return rsp.success;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      // @ts-ignore
      req.ip || "0.0.0.0";

    // Rate limit
    const rl = rateLimitByIp(ip);
    if (!rl.ok) {
      return NextResponse.json(
        { error: `Lütfen ${rl.retryAfter} sn sonra tekrar deneyin.` },
        { status: 429 }
      );
    }

    const json = await req.json();
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Geçersiz form verisi", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, message, website, cfToken } = parsed.data;

    // Honeypot
    if (website && website.length > 0) {
      return NextResponse.json({ ok: true }); // sessizce kabul et
    }

    // Opsiyonel Turnstile doğrulaması
    const ok = await verifyTurnstile(cfToken);
    if (!ok) {
      return NextResponse.json({ error: "Doğrulama başarısız." }, { status: 400 });
    }

    // SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const to = process.env.CONTACT_TO || process.env.SMTP_USER!;
    const subject = `Yeni İletişim Formu – ${name}`;

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      message: escapeHtml(message),
      ip: escapeHtml(ip),
    };

    await transporter.sendMail({
      from: `"Proset Asansör – Website" <no-reply@${(process.env.MAIL_FROM_DOMAIN || "example.com")}>`,
      to,
      subject,
      text: `Ad Soyad: ${safe.name}
E-posta: ${safe.email}
Telefon: ${safe.phone}
IP: ${safe.ip}

Mesaj:
${safe.message}`,
      html: `
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
          <h2 style="margin:0 0 8px;">Web Formu</h2>
          <table style="border-collapse:collapse">
            <tr><td><b>Ad Soyad</b></td><td style="padding-left:8px">${safe.name}</td></tr>
            <tr><td><b>E-posta</b></td><td style="padding-left:8px">${safe.email}</td></tr>
            <tr><td><b>Telefon</b></td><td style="padding-left:8px">${safe.phone}</td></tr>
            <tr><td><b>IP</b></td><td style="padding-left:8px">${safe.ip}</td></tr>
          </table>
          <p style="margin-top:12px;white-space:pre-wrap">${safe.message}</p>
        </div>
      `,
      replyTo: `${name} <${email}>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json(
      { error: "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
