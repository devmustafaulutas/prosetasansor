import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="section !py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-400 md:flex-row">
          <p>© {new Date().getFullYear()} Proset Asansör • Tüm hakları saklıdır.</p>
          <nav className="flex items-center gap-4">
            <a className="hover:text-white" href="#hizmetler">Hizmetler</a>
            <a className="hover:text-white" href="#urunler">Ürünler</a>
            <a className="hover:text-white" href="#projeler">Projeler</a>
            <a className="hover:text-white" href="#sss">SSS</a>
            <a className="hover:text-white" href="#teklif">Teklif</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
