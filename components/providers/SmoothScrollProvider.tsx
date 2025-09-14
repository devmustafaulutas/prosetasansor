'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersNoMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const lenis = new Lenis({
      duration: prefersNoMotion ? 0.6 : 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2
    });

    // global erişim istersen:
    (window as any).lenis = lenis;
    lenisRef.current = lenis;

    // GSAP senkronu + kendi custom event’imiz
    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update();
      window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: e })); // {direction, velocity, scroll, ...}
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
