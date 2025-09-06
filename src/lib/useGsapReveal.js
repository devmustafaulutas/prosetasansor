import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function useGsapReveal(deps = []) {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-stagger]',
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out',
          stagger: 0.08, delay: 0.1, clearProps: 'transform,opacity'
        }
      )

      ScrollTrigger.batch('[data-reveal]', {
        start: 'top 80%',
        once: true,
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.06, clearProps: 'transform,opacity' }
          )
        }
      })
    })

    setTimeout(() => ScrollTrigger.refresh(), 0)
    return () => ctx.revert()
  }, deps)
}
