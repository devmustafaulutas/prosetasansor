// src/lib/useReveal.js
import { useEffect } from 'react'

/**
 * data-reveal ve data-stagger elemanlarına görünür olduklarında .reveal-show class'ı ekler
 * threshold: 0.15 -> elemanın %15'i görünür olunca tetikler
 */
export default function useReveal({ rootMargin = '0px 0px -10% 0px', threshold = 0.15 } = {}) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        if (entry.isIntersecting) {
          el.classList.add('reveal-show')
          // bir kereye mahsus
          io.unobserve(el)
        }
      })
    }, { root: null, rootMargin, threshold })

    const els = document.querySelectorAll('[data-reveal], [data-stagger]')
    els.forEach((el) => io.observe(el))

    // güvence: 3sn sonra hâlâ görünür değilse görünür yap (edge case)
    const safety = setTimeout(() => {
      els.forEach((el) => el.classList.add('reveal-show'))
    }, 3000)

    return () => { clearTimeout(safety); io.disconnect() }
  }, [rootMargin, threshold])
}
