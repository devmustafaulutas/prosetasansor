import React from 'react'

/* Çerçevesiz sade ikonlar */
const Icon = {
    Instagram: ({ className = '', ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className={`h-5 w-5 ${className}`}
            {...props}
        >
            <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
            <circle cx="12" cy="12" r="3.5" fill="#0c0d10" />
            <circle cx="12" cy="12" r="2.6" fill="currentColor" />
            <circle cx="18.2" cy="5.8" r="1.1" fill="currentColor" />
        </svg>
    ),

    WhatsApp: ({ className = '', ...props }) => (
        <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className={`h-[18px] w-[18px] ${className}`}
            {...props}
        >
            <path d="M16 3A12 12 0 004 15c0 2.28.65 4.42 1.8 6.26L4 29l7.9-1.76A12 12 0 1016 3z" />
        </svg>
    ),

    LinkedIn: ({ className = '', ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className={`h-5 w-5 ${className}`}
            {...props}
        >
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM9 8h4.7v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5C22.4 7.7 24 10 24 14.1V24h-5v-8.9c0-2.1-.7-3.5-2.5-3.5-1.3 0-2.1.9-2.4 1.8-.1.3-.1.8-.1 1.2V24H9z" />
        </svg>
    ),
    Mail: ({ className = '', ...props }) => (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            className={`h-5 w-5 ${className}`}
            {...props}
        >
            <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v.217l-10 6.25L2 5.217V5zm0 2.383V19a2 2 0 002 2h16a2 2 0 002-2V7.383l-9.445 5.903a2 2 0 01-2.11 0L2 7.383z" />
        </svg>
    ),
};

export default function Footer() {
    const addr = 'KAZIM KARABEKİR MAH. 1682 CAD. 9 B, ETİMESGUT / ANKARA'
    const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(addr)}&output=embed`

    return (
        <footer className="relative border-t border-neutral-800 bg-[#0c0d10] text-left" role="contentinfo">
            {/* üstte ince kırmızı gradient şerit */}
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
                        <div className="mt-5 flex items-center gap-4 text-neutral-300">
                            <a
                                href="https://www.instagram.com/prosetelevator/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="transition hover:text-[var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] rounded-sm"
                            >
                                <Icon.Instagram />
                            </a>
                            <a
                                href="https://wa.me/905532776781"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="transition hover:text-[var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] rounded-sm"
                            >
                                <Icon.WhatsApp />
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="transition hover:text-[var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] rounded-sm"
                            >
                                <Icon.LinkedIn />
                            </a>
                            <a
                                href="mailto:prosetasansor@gmail.com"
                                aria-label="E-posta"
                                className="transition hover:text-[var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] rounded-sm"
                            >
                                <Icon.Mail />
                            </a>
                        </div>
                    </section>

                    <nav aria-labelledby="footer-quicklinks" className="p-6 md:py-0 md:basis-1/4 md:px-6">
                        <h4 id="footer-quicklinks" className="text-lg font-semibold text-[var(--brand)] mb-4 tracking-tight">
                            Hızlı Bağlantılar
                        </h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-1 text-sm" >
                            {[
                                ['Hakkımızda', '/hakkimizda'],
                                ['Hizmetler', '/hizmetler'],
                                ['Projeler', '/projeler'],
                                ['Belgeler', '/belgeler'],
                                ['İletişim', '/iletisim'],
                            ].map(([t, href]) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        className="block py-1 rounded-sm text-neutral-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                                    >
                                        {t}
                                    </a>
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
    )
}
