import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

let lenisInstance = null

export function setupSmoothScroll() {
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    smoothWheel: true,
    smoothTouch: false,
  })

  lenisInstance.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  ScrollTrigger.addEventListener('refresh', () => lenisInstance.resize())


  return lenisInstance
}
