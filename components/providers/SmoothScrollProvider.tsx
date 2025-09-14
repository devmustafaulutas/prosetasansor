'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersNoMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // TS/sürüm güvenli başlatma
    const lenis = new (Lenis as any)({
      ...(prefersNoMotion ? { duration: 0.6 } : { duration: 1.1 }),
    });

    (window as any).lenis = lenis;

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      try { lenis.destroy(); } catch {}
      (window as any).lenis = undefined;
    };
  }, []);

  return <>{children}</>;
}
