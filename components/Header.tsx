'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

function ActiveLink({
    href, children, onClick
}: { href: string; children: React.ReactNode; onClick?: () => void; }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`relative text-sm leading-6 nav-underline ${isActive ? 'nav-underline--active' : 'text-neutral-300'}`}
        >
            {children}
        </Link>
    );
}

function MobileLink({
    href, children, onClick
}: { href: string; children: React.ReactNode; onClick?: () => void; }) {
    const pathname = usePathname();
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`block rounded-xl px-4 py-3 text-base font-medium transition
        ${isActive
                    ? 'text-white bg-white/5 ring-1 ring-white/10'
                    : 'text-neutral-200 hover:text-white hover:bg-white/5 active:bg-white/7'}`}
        >
            {children}
        </Link>
    );
}

export default function Header() {
    const [open, setOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const headerRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    React.useLayoutEffect(() => {
        const el = headerRef.current;
        if (!el) return;
        const apply = () => {
            const h = el.offsetHeight || 56;
            document.documentElement.style.setProperty('--header-h', `${h}px`);
        };
        apply();
        const ro = new ResizeObserver(apply);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    React.useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [open]);

    const wa = `https://wa.me/905532776781?text=${encodeURIComponent(
        'Merhaba, Proset Asansör için bilgi ve teklif almak istiyorum.'
    )}`;

    const IconCls = "text-[16px]";
    const socialsDesktop = [
        { href: 'https://www.instagram.com/prosetelevator/', label: 'Instagram', node: <FaInstagram className={IconCls} aria-hidden /> },
        { href: wa, label: 'WhatsApp', node: <FaWhatsapp className={IconCls} aria-hidden /> },
        { href: '#', label: 'LinkedIn', node: <FaLinkedinIn className={IconCls} aria-hidden /> },
        { href: 'mailto:prosetasansor@gmail.com', label: 'E-posta', node: <FaEnvelope className={IconCls} aria-hidden /> },
    ];
    const socialsMobile = socialsDesktop;

    return (
        <>
            <div className={`sticky top-0 z-[2000] header-wrap antialiased ${scrolled ? 'header-blur' : ''}`}>
                <div ref={headerRef} className="mx-auto max-w-[1200px] px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/logo.png" alt="Proset Asansör" width={180} height={52} priority
                            className="h-12 sm:h-14 w-auto object-contain [image-rendering:-webkit-optimize-contrast]"
                        />
                        <span className="hidden sm:inline font-semibold text-white">Proset Asansör</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        <ActiveLink href="/">Ana Sayfa</ActiveLink>
                        <ActiveLink href="/hakkimizda">Hakkımızda</ActiveLink>
                        <ActiveLink href="/hizmetlerimiz">Hizmetlerimiz</ActiveLink>
                        <ActiveLink href="/galeri">Galeri</ActiveLink>
                        <ActiveLink href="/iletisim">İletişim</ActiveLink>
                    </nav>

                    {/* Sosyaller + CTA (desktop) */}
                    <div className="hidden md:flex items-center gap-1">
                        {socialsDesktop.map(({ href, label, node }, i) => {
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

                        <Link
                            href="/iletisim"
                            className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5
                         text-sm font-semibold text-white transition will-change-transform
                         [background:linear-gradient(#14171c,#14171c)_padding-box,linear-gradient(90deg,rgba(225,29,47,.95),rgba(225,29,47,.35))_border-box]
                         border border-transparent shadow-[0_8px_24px_rgba(225,29,47,.28)]
                         hover:shadow-[0_7px_12px_rgba(225,29,47,.45)] hover:-translate-y-0.5 active:translate-y-0
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]">
                            Teklif Al
                            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 [box-shadow:inset_0_0_18px_rgba(225,29,47,.35)]" />
                        </Link>
                    </div>

                    {/* Mobile trigger */}
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Menüyü aç"
                        className="md:hidden hamburger"
                    >
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                    </button>
                </div>
            </div>

            {/* Mobile sheet */}
            {open && (
                <div className="fixed inset-0 z-[5000]" role="dialog" aria-modal="true" aria-label="Mobil menü">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
                    <aside className="absolute inset-x-0 top-0 h-full w-full sm:left-auto sm:w-[380px]
                            bg-[#0f1116] border-l border-neutral-800
                            pt-[max(16px,env(safe-area-inset-top))] pb-[max(16px,env(safe-area-inset-bottom))]
                            px-5 flex flex-col">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image src="/logo.png" alt="Proset Asansör" width={120} height={36}
                                    className="h-8 w-auto [filter:drop-shadow(0_0_10px_rgba(255,255,255,.06))] [filter:brightness(1.05)]" />
                                <span className="font-semibold text-white">Proset Asansör</span>
                            </div>
                            <button onClick={() => setOpen(false)} aria-label="Menüyü kapat" className="icon-btn">
                                <RxCross2 className="text-white" size={20} />
                            </button>
                        </div>

                        <nav className="mt-6 flex-1 overflow-y-auto">
                            <div className="space-y-1">
                                <MobileLink href="/hakkimizda" onClick={() => setOpen(false)}>Hakkımızda</MobileLink>
                                <MobileLink href="/hizmetlerimiz" onClick={() => setOpen(false)}>Hizmetlerimiz</MobileLink>
                                <MobileLink href="/projeler" onClick={() => setOpen(false)}>Projeler</MobileLink>
                                <MobileLink href="/galeri" onClick={() => setOpen(false)}>Galeri</MobileLink>
                                <MobileLink href="/iletisim" onClick={() => setOpen(false)}>İletişim</MobileLink>
                            </div>
                            <div className="my-6 h-px bg-white/10" />

                            <div className="grid grid-cols-4 gap-3">
                                {socialsMobile.map(({ href, label, node }, i) => {
                                    const external = /^https?:/i.test(href);
                                    return (
                                        <a
                                            key={i}
                                            href={href}
                                            target={external ? '_blank' : undefined}
                                            rel={external ? 'noreferrer' : undefined}
                                            aria-label={label}
                                            className="inline-flex h-12 w-full items-center justify-center rounded-xl
                                 border border-neutral-800 bg-[#12151b] text-neutral-300
                                 hover:text-[var(--brand)] hover:bg-white/6 hover:border-[var(--brand)]/40 transition"
                                        >
                                            {node}
                                        </a>
                                    );
                                })}
                            </div>
                        </nav>

                        <div className="mt-6">
                            <Link
                                href="/iletisim"
                                onClick={() => setOpen(false)}
                                className="w-full justify-center group relative inline-flex items-center rounded-full px-5 py-3
                           text-sm font-semibold text-white transition
                           [background:linear-gradient(#14171c,#14171c)_padding-box,linear-gradient(90deg,rgba(225,29,47,.95),rgba(225,29,47,.35))_border-box]
                           border border-transparent shadow-[0_8px_24px_rgba(225,29,47,.28)]
                           hover:shadow-[0_14px_42px_rgba(225,29,47,.45)]"
                            >
                                Teklif Al
                                <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 [box-shadow:inset_0_0_18px_rgba(225,29,47,.35)]" />
                            </Link>
                        </div>
                    </aside>
                </div>
            )}
        </>
    );
}
