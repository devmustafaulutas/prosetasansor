import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const [open, setOpen] = React.useState(false)
    const [blur, setBlur] = React.useState(false)

    React.useEffect(() => {
        const onScroll = () => setBlur(window.scrollY > 8)
        onScroll()
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const link = (to, label) => (
        <NavLink
            to={to}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
                `hover:text-white ${isActive ? 'text-white' : 'text-neutral-300'}`
            }
        >
            {label}
        </NavLink>
    )

    return (
        <div className={`header-wrap ${blur ? 'header-blur' : ''}`}>
            <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center justify-between">
                <NavLink to="/" className="flex items-center gap-2 font-semibold">
                    <span className="inline-block h-7 w-7 rounded-lg" style={{ background: 'var(--color-brand)' }} />
                    Proset Asansör
                </NavLink>

                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {link('/hakkimizda', 'Hakkımızda')}
                    {link('/hizmetler', 'Hizmetler')}
                    {link('/urunler', 'Ürünler')}
                    {link('/projeler', 'Projeler')}
                    {link('/belgeler', 'Belgeler')}
                    {link('/haberler', 'Haberler')}
                    {link('/iletisim', 'İletişim')}
                    <NavLink to="/iletisim" className="btn btn-primary">Teklif Al</NavLink>
                </nav>

                <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg border border-neutral-700 px-3 py-2">
                    Menü
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95">
                    <div className="mx-auto max-w-[1200px] px-4 py-3 flex flex-col gap-3 text-sm">
                        {link('/hakkimizda', 'Hakkımızda')}
                        {link('/hizmetler', 'Hizmetler')}
                        {link('/urunler', 'Ürünler')}
                        {link('/projeler', 'Projeler')}
                        {link('/belgeler', 'Belgeler')}
                        {link('/haberler', 'Haberler')}  
                        <NavLink to="/iletisim" onClick={() => setOpen(false)} className="btn btn-primary text-center">İletişim</NavLink>
                    </div>
                </div>
            )}
        </div>
    )
}
