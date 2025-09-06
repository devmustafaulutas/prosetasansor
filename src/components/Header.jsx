import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpeg'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const [blur, setBlur] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setBlur(window.scrollY > 8)
    onScroll(); window.addEventListener('scroll', onScroll)
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
      <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-3 font-semibold">
          <img src={logo} alt="Proset Asansör" className="h-8 w-auto rounded-sm object-contain" />
          <span className="hidden sm:inline">Proset Asansör</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {link('/hakkimizda', 'Hakkımızda')}
          {link('/hizmetler', 'Hizmetler')}
          {link('/urunler', 'Ürünler')}
          {link('/projeler', 'Projeler')}
          {link('/belgeler', 'Belgeler')}
          {link('/iletisim', 'İletişim')}
          <NavLink to="/iletisim" className="btn btn-primary">Teklif Al</NavLink>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg border border-neutral-700 px-3 py-2">Menü</button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black/85">
          <div className="mx-auto max-w-[1200px] px-4 py-3 flex flex-col gap-3 text-sm">
            {link('/hakkimizda', 'Hakkımızda')}
            {link('/hizmetler', 'Hizmetler')}
            {link('/urunler', 'Ürünler')}
            {link('/projeler', 'Projeler')}
            {link('/belgeler', 'Belgeler')}
            {link('/iletisim', 'İletişim')}
            <NavLink to="/iletisim" onClick={() => setOpen(false)} className="btn btn-primary text-center">Teklif Al</NavLink>
          </div>
        </div>
      )}
    </div>
  )
}
