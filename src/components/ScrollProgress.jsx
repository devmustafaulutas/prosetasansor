import React from 'react'

export default function ScrollProgress() {
  const ref = React.useRef(null)

  React.useEffect(() => {
    const el = ref.current
    const onScroll = () => {
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? (h.scrollTop / max) * 100 : 0
      el.style.transform = `scaleX(${p / 100})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-neutral-900/60">
      <div
        ref={ref}
        className="h-full origin-left"
        style={{ background: 'var(--color-brand)', transform: 'scaleX(0)' }}
      />
    </div>
  )
}
