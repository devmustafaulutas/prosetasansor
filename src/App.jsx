import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Products from './components/Products'
import Projects from './components/Projects'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // giriş staggers
      gsap.from('[data-stagger]', {
        opacity: 0, y: 24, duration: 0.8, ease: 'power2.out', stagger: 0.08, delay: 0.15
      })
      // section reveal
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          opacity: 0, y: 24, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        })
      })
    }, pageRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <Header />
      <Hero />
      <Logos />
      <Features />
      <Products />
      <Projects />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
