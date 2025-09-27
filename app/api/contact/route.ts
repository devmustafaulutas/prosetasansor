import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// === ENV ===
// .env: Aşağıdakileri doldur
// SMTP_HOST=smtp.gmail.com
// SMTP_PORT=587
// SMTP_USER=mustafaum538@gmail.com
// SMTP_PASS=qgmdioawrmnufmcl   # app password (boşluksuz)
// MAIL_FROM="Proset Asansör <mustafaum538@gmail.com>"
// MAIL_TO=prosetasansor@gmail.com
// CONTACT_ALLOWED_ORIGINS=https://prosetasansor.com,https://www.prosetasansor.com,https://senin-vercel-domainin.vercel.app

const SMTP_HOST = process.env.SMTP_HOST!;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER!;
const SMTP_PASS = process.env.SMTP_PASS!;
const MAIL_FROM  = process.env.MAIL_FROM || `Proset Asansör <${SMTP_USER}>`;
const MAIL_TO    = process.env.MAIL_TO!;
const ALLOWED    = (process.env.CONTACT_ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);

// Basit CORS helper
function withCors(origin: string | null, status = 200, body?: any) {
  const headers: Record<string,string> = {
    'Vary': 'Origin',
    'Access-Control-Allow-Methods': 'POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  if (origin && ALLOWED.some(a => origin === a)) headers['Access-Control-Allow-Origin'] = origin;
  return new NextResponse(body ? JSON.stringify(body) : null, {
    status,
    headers: body ? { 'Content-Type': 'application/json', ...headers } : headers,
  });
}

// Basit HTML şablon
const esc = (s: string) => (s || '')
  .replace(/&/g,'&amp;').replace(/</g,'&lt;')
  .replace(/>/g,'&gt;').replace(/"/g,'&quot;');

function emailHTML(p: {
  mode: string; topics: string[]; name: string; phone: string; email: string; message: string;
}) {
  const badge = (t: string) =>
    `<span style="display:inline-block;margin:0 6px 6px 0;padding:6px 10px;border-radius:9999px;background:#ffe2e6;color:#b91c1c;font-weight:600;font-size:12px;border:1px solid #fecdd3;">${esc(t)}</span>`;
  const topicBadges = p.topics?.length ? p.topics.map(badge).join('') : '<span style="color:#6b7280;">(seçilmedi)</span>';
  const now = new Date().toLocaleString('tr-TR');
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"/></head>
<body style="margin:0;background:#0b0e13;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0b0e13;padding:24px 12px;">
<tr><td align="center">
  <table role="presentation" width="100%" style="max-width:640px;background:#11151b;border:1px solid #1f2937;border-radius:16px;overflow:hidden;">
    <tr><td style="background:linear-gradient(90deg,#0f1217,#151922);padding:18px 22px;border-bottom:1px solid #1f2937;">
      <div style="color:#fff;font-weight:800;letter-spacing:.4px;font-size:16px;">PROSET ASANSÖR</div>
      <div style="color:#fca5a5;font-size:12px;margin-top:2px;">Electronic & Elevators Systems</div>
    </td></tr>

    <tr><td style="padding:22px 22px 0 22px;">
      <div style="color:#ffffff;font-size:20px;font-weight:800;line-height:1.3;">Yeni İletişim Formu</div>
      <div style="color:#d1d5db;font-size:13px;margin-top:4px;">${esc(now)} • Mod: <strong>${esc(p.mode)}</strong></div>
    </td></tr>

    <tr><td style="padding:16px 22px 8px 22px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        ${row('Ad Soyad', p.name||'-')}
        ${gap()}
        ${row('Telefon', p.phone||'-')}
        ${gap()}
        ${row('E-posta', p.email||'-')}
        ${gap()}
        <tr><td style="padding:10px 0;color:#9ca3af;font-size:12px;">İlgilendiği Hizmet(ler)</td></tr>
        <tr><td style="padding:4px 0 0 0;">${topicBadges}</td></tr>
        ${gap()}
        ${row('Mesaj', p.message || '(boş)', true)}
      </table>
    </td></tr>

    <tr><td style="padding:18px 22px;border-top:1px solid #1f2937;background:#0f1217;color:#9ca3af;font-size:12px;">
      Bu e-posta <strong>Proset Asansör</strong> web sitesi iletişim formundan otomatik olarak gönderilmiştir.
    </td></tr>
  </table>
  <div style="color:#6b7280;font-size:11px;margin-top:10px;">© ${new Date().getFullYear()} PROSET</div>
</td></tr></table>
</body></html>`;
  function row(label:string, val:string, pre=false){
    return `
    <tr><td style="padding:10px 0;color:#9ca3af;font-size:12px;">${esc(label)}</td></tr>
    <tr><td style="padding:8px 12px;background:#0f1217;border:1px solid #1f2937;border-radius:10px;color:#f9fafb;font-size:14px;${pre?'white-space:pre-wrap;line-height:1.55;':''}">${esc(val)}</td></tr>`;
  }
  function gap(){ return `<tr><td style="height:12px;"></td></tr>`; }
}

// Nodemailer transport
function transporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

// --- OPTIONS (CORS preflight) ---
export async function OPTIONS(req: NextRequest) {
  const origin = req.headers.get('origin');
  return withCors(origin, 204);
}

// --- POST ---
export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin');

  // CORS check
  if (!origin || !ALLOWED.some(a => origin === a)) {
    return withCors(origin, 403, { ok:false, error:'Origin not allowed' });
  }

  let body: any;
  try { body = await req.json(); }
  catch { return withCors(origin, 400, { ok:false, error:'Invalid JSON' }); }

  const {
    mode = 'Genel',
    topics = [],
    name = '',
    phone = '',
    email = '',
    message = '',
    website = '', // honeypot
    // cf_turnstile_token, // istersen ekleyebilirsin
  } = body || {};

  // Honeypot
  if (website !== '') return withCors(origin, 200, { ok:true });

  // Basit doğrulama
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !emailRegex.test(email) || !message) {
    return withCors(origin, 400, { ok:false, error:'Eksik veya hatalı alan' });
  }

  // (opsiyonel) Turnstile doğrulaması burada yapılabilir

  // Mail içeriği
  const subject = `[Web İletişim • ${mode}] ${name || 'İsimsiz'}`;
  const html = emailHTML({ mode, topics, name, phone, email, message });
  const text =
    `📝 Mod: ${mode}
📌 Konular: ${topics?.length?topics.join(', '):'(seçilmedi)'}
👤 Ad: ${name}
📞 Telefon: ${phone||'-'}
✉️ E-posta: ${email}

Mesaj:
${message}

—Proset web formu • ${new Date().toLocaleString('tr-TR')}`;

  try {
    const tx = transporter();
    await tx.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      subject,
      text,
      html,
      replyTo: `${name} <${email}>`,
    });
    return withCors(origin, 200, { ok:true });
  } catch (e:any) {
    console.error('mail error', e);
    return withCors(origin, 500, { ok:false, error:'Mail gönderilemedi' });
  }
}
