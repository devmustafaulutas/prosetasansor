import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="section !py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Proset Asansör • Tüm hakları saklıdır.</p>
          <nav className="flex items-center gap-4">
            <NavLink className="hover:text-white" to="/hizmetler">Hizmetler</NavLink>
            <NavLink className="hover:text-white" to="/urunler">Ürünler</NavLink>
            <NavLink className="hover:text-white" to="/projeler">Projeler</NavLink>
            <NavLink className="hover:text-white" to="/belgeler">Belgeler</NavLink>
            <NavLink className="hover:text-white" to="/iletisim">İletişim</NavLink>
          </nav>
        </div>
      </div>
    </footer>
  )
}
