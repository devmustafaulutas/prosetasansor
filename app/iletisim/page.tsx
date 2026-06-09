'use client';

import * as React from 'react';
import PageHeader from '@/components/PageHeader';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import hero from '@/public/asansor-1.jpg';

import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  Shield,
  Sparkles,
  Wrench,
} from 'lucide-react';

/* --------- TİPLER --------- */
type Topic =
  | 'Montaj'
  | 'Modernizasyon'
  | 'Bakım'
  | 'Engelli Platformu'
  | 'Yürüyen Merdiven'
  | 'Projelendirme';

const TOPICS: Topic[] = [
  'Montaj',
  'Modernizasyon',
  'Bakım',
  'Engelli Platformu',
  'Yürüyen Merdiven',
  'Projelendirme',
];

type Mode = 'Teklif' | 'Servis' | 'Genel';

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
  website: string; // honeypot
};

/* --------- AYARLAR --------- */
const CONTACT_MODE = process.env.NEXT_PUBLIC_CONTACT_MODE ?? 'disabled'; // 'disabled' | 'api'
const CONTACT_API = process.env.NEXT_PUBLIC_CONTACT_API || ''; // serverless endpoint
const CONTACT_EMAIL = 'prosetasansor@gmail.com';

/* --------- HELPER (mailto fallback) ---------- */
function buildSummary({
  mode,
  topics,
  form,
}: {
  mode: Mode;
  topics: Topic[];
  form: FormState;
}) {
  const lines = [
    `📝 Mod: ${mode}`,
    topics.length ? `📌 Konular: ${topics.join(', ')}` : `📌 Konular: (seçilmedi)`,
    `👤 Ad: ${form.name || '-'}`,
    `📞 Telefon: ${form.phone || '-'}`,
    `✉️ E-posta: ${form.email || '-'}`,
    '',
    'Mesaj:',
    form.message || '(boş)',
    '',
    `—Proset elektronik ve asansör sistemleri web formu • ${new Date().toLocaleString('tr-TR')}`,
  ];
  return lines.join('\n');
}

function buildMailto({ subject, body }: { subject: string; body: string }) {
  const s = encodeURIComponent(subject);
  const b = encodeURIComponent(body);
  return `mailto:${CONTACT_EMAIL}?subject=${s}&body=${b}`;
}

/* =================== SAYFA =================== */
export default function ContactPage() {
  const [mode, setMode] = React.useState<Mode>('Teklif');
  const [topics, setTopics] = React.useState<Topic[]>([]);
  const [loading, setLoading] = React.useState(false);

  const [form, setForm] = React.useState<FormState>({
    name: '',
    phone: '',
    email: '',
    message: '',
    website: '', // honeypot
  });

  const { toast } = useToast();

  const charLeft = 1000 - form.message.length;

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const toggleTopic = (t: Topic) =>
    setTopics((arr) => (arr.includes(t) ? arr.filter((x) => x !== t) : [...arr, t]));

  const wa = () => {
    const num = '905532776781';
    const msg =
      'Merhaba! Proset elektronik ve asansör sistemleri web sitesinden ulaşıyorum. Keşif/teklif talep etmek istiyorum.';
    window.open(`https://wa.me/${num}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const modeLead =
    mode === 'Teklif'
      ? 'Projeniz için temel bilgileri paylaşın; hızla fiyat & süre çıkaralım.'
      : mode === 'Servis'
      ? 'Arıza/bakım talepleriniz için ekip yönlendirelim.'
      : 'Sorularınız ve geri bildirimleriniz için bize yazın.';

  const messagePH =
    mode === 'Teklif'
      ? 'Proje adresi, kat sayısı, kullanım amacı, mevcut durum vb.'
      : mode === 'Servis'
      ? 'Arıza/belirti, marka/model, adres, erişim bilgisi vb.'
      : 'Kısa mesajınızı yazın…';

  /* --------- GÖNDER --------- */
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const subject = `[Web İletişim • ${mode}] ${form.name || 'İsimsiz'}`;

    // ❗ API KAPALI: mailto + clipboard + toast
    if (CONTACT_MODE === 'disabled' || !CONTACT_API) {
      try {
        const body = buildSummary({ mode, topics, form });
        try { await navigator.clipboard?.writeText(body); } catch {}
        const url = buildMailto({ subject, body });
        window.location.href = url;
        toast({
          variant: 'success',
          title: 'E-posta uygulamanız açılıyor',
          description: 'Mesaj içeriği panoya da kopyalandı. Göndermeden önce kontrol edebilirsiniz.',
        });
        setForm({ name: '', phone: '', email: '', message: '', website: '' });
        setTopics([]);
      } catch (err: any) {
        toast({
          variant: 'destructive',
          title: 'E-posta açılamadı',
          description: 'Tarayıcınız mail uygulaması açmadıysa WhatsApp ile iletebilirsiniz.',
        });
      } finally {
        setLoading(false);
      }
      return;
    }

    // ✅ API AÇIK: serverless SMTP (Vercel/Netlify)
    try {
      const res = await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // HTML şablonu serverda üretilecek; biz sadece data gönderiyoruz
        body: JSON.stringify({ ...form, topics, mode }),
      });
      const data = await res.json();

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || 'Gönderim başarısız');
      }

      toast({
        variant: 'success',
        title: 'Mesajınız alındı',
        description: 'En kısa sürede sizinle iletişime geçeceğiz.',
      });

      setForm({ name: '', phone: '', email: '', message: '', website: '' });
      setTopics([]);
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: 'Mesaj gönderilemedi',
        description: err?.message || 'Bir hata oluştu',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <WhatsAppButton />
      <PageHeader title="İletişim" bgImage={hero.src} objectPosition="50% 45%" />

      {/* Üst vaat pill'leri */}
      <section className="bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { Icon: Shield, t: 'Güvenlik standartlarına uygun çözümler' },
              { Icon: Sparkles, t: 'Modern ve estetik tasarımlar' },
              { Icon: Wrench, t: 'Uzman bakım & servis desteği' },
            ].map(({ Icon, t }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm"
              >
                <Icon className="h-4 w-4 text-red-500" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Bilgiler */}
      <section className="relative bg-muted/30">
        {/* soft aurora */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -left-20 -top-24 h-96 w-96 rounded-full blur-3xl opacity-25"
            style={{ background: 'radial-gradient(closest-side, rgba(225,29,72,.35), transparent 70%)' }}
          />
          <div
            className="absolute -right-20 top-1/3 h-[420px] w-[420px] rounded-full blur-3xl opacity-20"
            style={{ background: 'radial-gradient(closest-side, rgba(96,165,250,.35), transparent 70%)' }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-5">
            {/* SOL: İletişim bilgileri */}
            <Card className="lg:col-span-2 border-white/10 bg-white/5 backdrop-blur-md lg:sticky lg:top-6 h-max">
              <CardContent className="p-6 space-y-6">
                <InfoRow
                  icon={<Phone className="h-5 w-5" />}
                  title="Telefon"
                  body={<a href="tel:+905532776781" className="hover:text-red-400">+90 553 277 67 81</a>}
                />
                <InfoRow
                  icon={<Mail className="h-5 w-5" />}
                  title="E-posta"
                  body={<a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-red-400 break-all">{CONTACT_EMAIL}</a>}
                />
                <InfoRow
                  icon={<MapPin className="h-5 w-5" />}
                  title="Adres"
                  body={<>Selçuklu Mahallesi Kurtaran Sokak 10A  <br /> SİNCAN /ANKARA</>}
                />

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                  Proset elektronik ve asansör sistemleri: “Her kata güven, her kata kalite.” Modern teknoloji ve güvenliği birleştirerek uzun ömürlü çözümler sunuyoruz.
                </div>

                <div className="flex flex-wrap gap-2">
                  <BadgePill>EN 81-20/50</BadgePill>
                  <BadgePill>CE Uyumlu</BadgePill>
                  <BadgePill>7/24 Servis</BadgePill>
                </div>
              </CardContent>
            </Card>

            {/* SAĞ: Form */}
            <div className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md">
                {/* Üst: segmented + hızlı aksiyonlar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 sm:px-6 py-3">
                  <Segmented value={mode} onChange={setMode} options={['Teklif', 'Servis', 'Genel']} />
                  <div className="hidden sm:flex gap-2">
                    <a href="tel:+905532776781">
                      <Button className="bg-white text-black hover:bg-gray-100">
                        <Phone className="mr-2 h-4 w-4" />
                        Ara
                      </Button>
                    </a>
                    <Button
                      variant="outline"
                      onClick={wa}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>
                </div>

                {/* API kapalı bilgilendirme şeridi */}
                {(!CONTACT_API || CONTACT_MODE === 'disabled') && (
                  <div className="mx-6 mt-4 mb-1 rounded-lg border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">
                    Şu anda çevrim içi form gönderimi geçici olarak kapalı. <b>“Mesajı Gönder”</b> butonu e-posta uygulamanızı açacaktır. Alternatif olarak WhatsApp’tan yazabilirsiniz.
                  </div>
                )}

                <div className="px-6 pt-4 text-white/70 text-sm">{modeLead}</div>

                {/* FORM */}
                <form id="contact-form" onSubmit={submit} className="grid gap-5 p-6 md:grid-cols-2">
                  <FloatField label="Ad Soyad" name="name" value={form.name} onChange={onChange} required />
                  <FloatField
                    label="Telefon"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={onChange}
                    pattern="^\\+?\\d[\\d\\s]{9,}$"
                    title="Örn: +90555 222 33 44"
                    required
                  />
                  <FloatField
                    label="E-posta"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    required
                  />

                  {/* Topics */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium">İlgilendiğiniz hizmet(ler)</label>
                    <div className="flex flex-wrap gap-2">
                      {TOPICS.map((t) => {
                        const active = topics.includes(t);
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => toggleTopic(t)}
                            aria-pressed={active}
                            className={`rounded-full border px-3 py-1 text-sm transition ${active
                              ? 'border-red-500/50 bg-red-500/20 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,.05)]'
                              : 'border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-white/20'
                              }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium">Mesajınız</label>
                    <Textarea
                      name="message"
                      rows={6}
                      maxLength={1000}
                      value={form.message}
                      onChange={onChange}
                      placeholder={mode === 'Teklif'
                        ? 'Proje adresi, kat sayısı, kullanım amacı, mevcut durum vb.'
                        : mode === 'Servis'
                          ? 'Arıza/belirti, marka/model, adres, erişim bilgisi vb.'
                          : 'Kısa mesajınızı yazın…'}
                      className="tech-border resize-none"
                      required
                    />
                    <div className="mt-1 text-right text-xs text-white/60">{charLeft} karakter</div>
                  </div>

                  {/* Actions */}
                  <div className="md:col-span-2 flex flex-col gap-3 sm:flex-row">
                    <Button type="submit" disabled={loading} className="flex-1 bg-white text-black hover:bg-gray-100">
                      <Send className="mr-2 h-4 w-4" />
                      {loading ? 'Gönderiliyor…' : 'Mesajı Gönder'}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={wa}
                      className="border-green-600 text-green-500 hover:bg-green-600 hover:text-white"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                  </div>

                  <p className="md:col-span-2 text-xs text-white/60">
                    Gönderimler güvenlik için doğrulanır ve hız sınırı uygulanır.
                  </p>
                </form>

                {/* subtle loading overlay */}
                {loading && (
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-black/20 backdrop-blur-[1px]" />
                )}
              </div>
            </div>
          </div>

          {/* HARİTA */}
          <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl">
            <iframe
              className="h-[440px] w-full"
              src="https://www.google.com/maps?q=Etimesgut,Ankara&output=embed"
              loading="lazy"
              title="Google Maps –Proset elektronik ve asansör sistemleri"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------- küçük bileşenler ------------- */
function FloatField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required,
  placeholder,
  pattern,
  title,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  pattern?: string;
  title?: string;
}) {
  return (
    <div className="relative">
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        pattern={pattern}
        title={title}
        placeholder={placeholder ?? ' '}
        className="peer tech-border h-12 bg-transparent focus:bg-transparent focus-visible:bg-transparent px-4 pt-4"
        aria-label={label}
        autoComplete={name === 'email' ? 'email' : name === 'phone' ? 'tel' : 'on'}
        inputMode={name === 'phone' ? 'tel' : undefined}
      />
      <label
        htmlFor={name}
        className="
          pointer-events-none absolute left-4 top-3 text-sm text-white/60 transition-all
          peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm
          peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white
          peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}

function InfoRow({
  icon,
  title,
  body,
  action,
}: {
  icon: React.ReactNode;
  title: string;
  body: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-red-500/15 text-red-500">
        {icon}
      </div>
      <div className="flex-1">
        <div className="font-semibold">{title}</div>
        <div className="text-white/80">{body}</div>
      </div>
      {action}
    </div>
  );
}

function BadgePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function Segmented({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: any) => void;
  options: string[];
}) {
  return (
    <div
      role="tablist"
      aria-label="İletişim modu"
      className="inline-flex rounded-full border border-white/10 bg-white/5 p-1"
    >
      {options.map((o) => {
        const active = o === value;
        return (
          <button
            key={o}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(o)}
            className={`rounded-full px-3 py-1.5 text-sm transition ${
              active ? 'bg-white text-black shadow' : 'text-white/80 hover:bg-white/10'
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}
