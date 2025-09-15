import Link from 'next/link';
import * as React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa6"

const socials = [
  { href: 'https://www.instagram.com/prosetelevator?igsh=bWhwcGF2ZTlpa2hw', label: 'Instagram', node: <FaInstagram className="text-[18px]" aria-hidden="true" /> },
  { href: 'https://wa.me/905532776781',                label: 'WhatsApp',  node: <FaWhatsapp  className="text-[18px]" aria-hidden="true" /> },
  { href: 'mailto:prosetasansor@gmail.com',            label: 'E-posta',   node: <FaEnvelope      className="text-[18px]" aria-hidden="true" /> },
];

export default function Footer() {
  const addr = 'KAZIM KARABEKİR MAH. 1682 CAD. 9 B, ETİMESGUT / ANKARA';
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(addr)}&output=embed`;

  return (
    <footer className="relative border-t border-neutral-800 bg-[#0c0d10] text-left" role="contentinfo">
      <div
        className="absolute inset-x-0 -top-px h-px"
        style={{ background: 'linear-gradient(90deg, rgba(225,29,47,.9), rgba(225,29,47,.25))' }}
      />

      <div className="mx-auto max-w-[1200px] px-4 py-14">
        <div className="flex flex-col md:flex-row gap-y-8 md:gap-x-12">
          <section className="p-6 md:py-0 md:basis-1/4 md:px-6 md:first:pl-0 md:last:pr-0">
            <h4 className="text-lg font-semibold text-[var(--brand)] mb-4 tracking-tight">Proset Asansör</h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Montaj, modernizasyon ve periyodik bakımda kurumsal çözümler. TS EN 81-20/50 uyumlu, güvenli ve enerji verimli sistemler.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ href, label, node }, i) => {
                const external = /^https?:/i.test(href);
                return (
                  <a
                    key={i}
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full
                               border border-neutral-800 bg-[#12151b] text-neutral-300
                               transition hover:text-[var(--brand)] hover:border-[var(--brand)]/40 hover:bg-white/5
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                  >
                    {node}
                  </a>
                );
              })}
            </div>
          </section>

          <nav aria-labelledby="footer-quicklinks" className="p-6 md:py-0 md:basis-1/4 md:px-6">
            <h4 id="footer-quicklinks" className="text-lg font-semibold text-[var(--brand)] mb-4 tracking-tight">
              Hızlı Bağlantılar
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-1 text-sm">
              {[
                ['Hakkımızda', '/hakkimizda'],
                ['Hizmetlerimiz', '/hizmetlerimiz'],
                ['Projeler', '/projeler'],
                ['Belgeler', '/belgeler'],
                ['İletişim', '/iletisim'],
              ].map(([t, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block py-1 rounded-sm text-neutral-300 transition-colors hover:text-white
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                  >
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3) İletişim */}
          <section className="p-6 md:py-0 md:basis-1/4 md:px-6">
            <h4 className="text-lg font-semibold text-[var(--brand)] mb-4 tracking-tight">İletişim</h4>
            <address className="not-italic">
              <dl className="grid grid-cols-[88px_minmax(0,1fr)] gap-y-1 text-sm">
                <dt className="text-neutral-400">Telefon :</dt>
                <dd>
                  <a className="text-neutral-300 hover:text-white tabular-nums" href="tel:+905532776781">
                    +90 553 277 6781
                  </a>
                </dd>

                <dt className="text-neutral-400">E-posta :</dt>
                <dd>
                  <a className="text-neutral-300 hover:text-white break-words" href="mailto:prosetasansor@gmail.com">
                    prosetasansor@gmail.com
                  </a>
                </dd>

                <dt className="text-neutral-400">Adres :</dt>
                <dd className="text-neutral-300">{addr}</dd>
              </dl>
            </address>
          </section>

          {/* 4) Konum */}
          <section className="p-6 md:py-0 md:basis-1/4 md:px-6">
            <h4 className="text-lg font-semibold text-[var(--brand)] mb-4 tracking-tight">Konum</h4>
            <div className="rounded-2xl overflow-hidden border border-neutral-800 shadow-[0_10px_28px_rgba(0,0,0,.35)] bg-[#111318]">
              <div className="aspect-[16/12] w-full">
                <iframe title="Harita" src={mapSrc} width="100%" height="100%" loading="lazy" style={{ border: 0 }} />
              </div>
            </div>
          </section>
        </div>

        {/* 100vw ayırıcı + telif */}
        <div className="relative p-3 mt-12">
          <div className="absolute left-1/2 -top-px h-px w-screen -translate-x-1/2 bg-neutral-800" />
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-neutral-400">
            <p>© {new Date().getFullYear()} Proset Asansör — “Her kata güven, her kata kalite.”</p>
            <p>TS EN 81-20/50 uyumlu kurulum • 7/24 servis • Ankara</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
