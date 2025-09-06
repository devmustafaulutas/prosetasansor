import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

/* — Marka ikonları (SVG) — */
const Icon = {
    Instagram: (p) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p} className={`h-5 w-5 ${p.className || ''}`}>
            <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" />
            <circle cx="12" cy="12" r="3.5" fill="#0c0d10" />
            <circle cx="12" cy="12" r="2.6" fill="currentColor" />
            <circle cx="18.2" cy="5.8" r="1.1" fill="currentColor" />
        </svg>
    ),
    WhatsApp: (p) => (
        <svg viewBox="0 0 32 32" fill="currentColor" {...p} className={`h-[18px] w-[18px] ${p.className || ''}`}>
            <path d="M16 3A12 12 0 004 15c0 2.28.65 4.42 1.8 6.26L4 29l7.9-1.76A12 12 0 1016 3zm6.1 14.5c-.1-.2-.4-.3-.9-.6-.5-.2-2.7-1.3-3.2-1.5-.5-.2-.8-.2-1.1.2-.3.5-1 1.4-1.3 1.7-.3.3-.5.4-1 .2-.5-.2-1.9-.7-3.7-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5-.1-.8.2-1.1.2-.2.6-.7.8-1 .2-.3.3-.6.5-1 .1-.4 0-.7-.1-1l-1.5-3.6c-.4-.9-.8-.8-1.1-.8h-.9c-.4 0-.9.1-1.4.7C6 8.5 4.7 9.7 4.7 12.2c0 2.5 1.9 5 2.1 5.3.3.3 3.8 5.8 9.1 8 1.3.5 2.3.8 3.1 1 .3 0 .5.1.8.1 1 .2 2 .1 2.7.1.8-.1 2.5-1.1 2.9-2.1.4-1 .4-1.9.2-2.1z" />
        </svg>
    ),
    LinkedIn: (p) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p} className={`h-5 w-5 ${p.className || ''}`}>
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM9 8h4.7v2.2h.1c.7-1.2 2.4-2.5 4.9-2.5C22.4 7.7 24 10 24 14.1V24h-5v-8.9c0-2.1-.7-3.5-2.5-3.5-1.3 0-2.1.9-2.4 1.8-.1.3-.1.8-.1 1.2V24H9z" />
        </svg>
    ),
    Mail: (p) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...p} className={`h-5 w-5 ${p.className || ''}`}>
            <path d="M2 5a2 2 0 012-2h16a2 2 0 012 2v.22l-10 6.25L2 5.22V5zm0 2.38V19a2 2 0 002 2h16a2 2 0 002-2V7.38l-9.45 5.9a2 2 0 01-2.1 0L2 7.38z" />
        </svg>
    ),
    Menu: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p} className={`h-5 w-5 ${p.className || ''}`}><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" /></svg>),
    Close: (p) => (<svg viewBox="0 0 24 24" fill="currentColor" {...p} className={`h-5 w-5 ${p.className || ''}`}><path d="M6.4 4.98L4.98 6.4 10.59 12l-5.6 5.6 1.41 1.41L12 13.41l5.6 5.6 1.41-1.41L13.41 12l5.6-5.6-1.41-1.41L12 10.59 6.4 4.98z" /></svg>),
}

export default function Header() {
    const [open, setOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const headerRef = React.useRef(null)

    React.useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8)
        onScroll(); window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    React.useLayoutEffect(() => {
        const el = headerRef.current
        if (!el) return
        const apply = () => {
            const h = el.offsetHeight || 56
            document.documentElement.style.setProperty('--header-h', `${h}px`)
        }
        apply()
        const ro = new ResizeObserver(apply)
        ro.observe(el)
        return () => ro.disconnect()
    }, [])


    const link = (to, label) => (
        <NavLink
            to={to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
                // underline effect: bg gradient as underline (no pseudo), avoids glyph issues
                `relative text-sm leading-6 transition-colors
         bg-[linear-gradient(var(--brand),var(--brand))] bg-no-repeat bg-[0_100%]
         ${isActive
                    ? 'text-white bg-[length:100%_2px]'
                    : 'text-neutral-300 hover:text-white bg-[length:0%_2px] hover:bg-[length:100%_2px]'
                }`
            }
        >
            {label}
        </NavLink>
    )

    const wa = `https://wa.me/905532776781?text=${encodeURIComponent('Merhaba, Proset Asansör için bilgi ve teklif almak istiyorum.')}`

    return (
        <>
            {/* HEADER WRAPPER */}
            <div className={`sticky top-0 z-999 antialiased ${scrolled ? 'backdrop-blur-sm bg-[#0b0d12]/70 border-b border-neutral-800' : ''}`}>
                <div ref={headerRef} className="mx-auto max-w-[1200px] px-3 sm:px-4 h-14 sm:h-16 flex items-center justify-between gap-3">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Proset Asansör"
                            className="h-8 sm:h-9 w-auto object-contain [filter:drop-shadow(0_0_12px_rgba(255,255,255,.06))] [filter:brightness(1.05)]"
                        />
                        <span className="hidden sm:inline font-semibold text-white">Proset Asansör</span>
                    </NavLink>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6">
                        {link('/hakkimizda', 'Hakkımızda')}
                        {link('/hizmetler', 'Hizmetler')}
                        {link('/projeler', 'Projeler')}
                        {link('/belgeler', 'Belgeler')}
                        {link('/iletisim', 'İletişim')}
                    </nav>

                    {/* Sosyaller + CTA */}
                    <div className="hidden md:flex items-center gap-1">
                        {[
                            { href: 'https://www.instagram.com/prosetelevator/', label: 'Instagram', Icon: Icon.Instagram },
                            { href: wa, label: 'WhatsApp', Icon: Icon.WhatsApp },
                            { href: '#', label: 'LinkedIn', Icon: Icon.LinkedIn },
                            { href: 'mailto:prosetasansor@gmail.com', label: 'E-posta', Icon: Icon.Mail },
                        ].map(({ href, label, Icon: IconCmp }, i) => (
                            <a
                                key={i}
                                href={href}
                                target={href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                aria-label={label}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full
                                    text-neutral-300 transition hover:text-[var(--brand)]"
                            >
                                {React.createElement(IconCmp)}
                            </a>
                        ))}


                        {/* CTA — güçlü glow + hover-lift */}
                        <NavLink
                            to="/iletisim"
                            className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5
                         text-sm font-semibold text-white transition will-change-transform
                         [background:linear-gradient(#14171c,#14171c)_padding-box,linear-gradient(90deg,rgba(225,29,47,.95),rgba(225,29,47,.35))_border-box]
                         border border-transparent
                         shadow-[0_8px_24px_rgba(225,29,47,.28)]
                         hover:shadow-[0_7px_12px_rgba(225,29,47,.45)]
                         hover:-translate-y-0.5 active:translate-y-0
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]"
                        >
                            Teklif Al
                            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0
                               transition-opacity duration-200 group-hover:opacity-100
                               [box-shadow:inset_0_0_18px_rgba(225,29,47,.35)]" />
                        </NavLink>
                    </div>

                    {/* Mobile trigger */}
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Menüyü aç"
                        className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-700 p-2
                       text-neutral-200 hover:text-white hover:bg-white/[.06]"
                    >
                        <Icon.Menu />
                    </button>
                </div>
            </div>

            {/* Mobile sheet */}
            {open && (
                <div className="fixed inset-0 z-[60]">
                    <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
                    <div className="absolute right-0 top-0 h-full w-full sm:w-[380px] bg-[#0f1116] border-l border-neutral-800 p-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img src={logo} alt="Proset Asansör" className="h-8 w-auto [filter:drop-shadow(0_0_10px_rgba(255,255,255,.06))] [filter:brightness(1.05)]" />
                                <span className="font-semibold text-white">Proset Asansör</span>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Menüyü kapat"
                                className="rounded-md border border-neutral-700 p-2 text-neutral-300 hover:text-white"
                            >
                                <Icon.Close />
                            </button>
                        </div>

                        <nav className="mt-6 flex flex-col gap-5">
                            {link('/hakkimizda', 'Hakkımızda')}
                            {link('/hizmetler', 'Hizmetler')}
                            {link('/projeler', 'Projeler')}
                            {link('/belgeler', 'Belgeler')}
                            {link('/iletisim', 'İletişim')}
                        </nav>

                        <div className="mt-6 flex items-center gap-4">
                            <a href="https://www.instagram.com/prosetelevator/" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-[var(--brand)]"><Icon.Instagram /></a>
                            <a href={wa} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-[var(--brand)]"><Icon.WhatsApp /></a>
                            <a href="#" className="text-neutral-300 hover:text-[var(--brand)]"><Icon.LinkedIn /></a>
                            <a href="mailto:prosetasansor@gmail.com" className="text-neutral-300 hover:text-[var(--brand)]"><Icon.Mail /></a>
                        </div>

                        <NavLink
                            to="/iletisim"
                            onClick={() => setOpen(false)}
                            className="mt-6 group relative inline-flex items-center justify-center rounded-full px-5 py-2.5
                         text-sm font-semibold text-white transition
                         [background:linear-gradient(#14171c,#14171c)_padding-box,linear-gradient(90deg,rgba(225,29,47,.95),rgba(225,29,47,.35))_border-box]
                         border border-transparent
                         shadow-[0_8px_24px_rgba(225,29,47,.28)]
                         hover:shadow-[0_14px_42px_rgba(225,29,47,.45)]"
                        >
                            Teklif Al
                            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 [box-shadow:inset_0_0_18px_rgba(225,29,47,.35)]" />
                        </NavLink>
                    </div>
                </div>
            )}
        </>
    )
}
