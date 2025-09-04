import React from 'react'

export default function Header() {
  const [open, setOpen] = React.useState(false)
  const [blur, setBlur] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setBlur(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`header-wrap ${blur ? 'header-blur' : ''}`}>
      <div className="mx-auto max-w-[1200px] px-4 py-3 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-7 w-7 rounded-lg" style={{ background: 'var(--color-brand)' }} />
          Proset Asansör
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a className="hover:text-white" href="#hizmetler">Hizmetler</a>
          <a className="hover:text-white" href="#urunler">Ürünler</a>
          <a className="hover:text-white" href="#projeler">Projeler</a>
          <a className="hover:text-white" href="#sss">SSS</a>
          <a className="btn btn-primary" href="#teklif">Teklif Al</a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg border border-neutral-700 px-3 py-2">
          Menü
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950/95">
          <div className="mx-auto max-w-[1200px] px-4 py-3 flex flex-col gap-3 text-sm text-neutral-300">
            <a onClick={() => setOpen(false)} className="hover:text-white" href="#hizmetler">Hizmetler</a>
            <a onClick={() => setOpen(false)} className="hover:text-white" href="#urunler">Ürünler</a>
            <a onClick={() => setOpen(false)} className="hover:text-white" href="#projeler">Projeler</a>
            <a onClick={() => setOpen(false)} className="hover:text-white" href="#sss">SSS</a>
            <a onClick={() => setOpen(false)} className="btn btn-primary text-center" href="#teklif">Teklif Al</a>
          </div>
        </div>
      )}
    </div>
  )
}
