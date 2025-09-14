'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import * as React from 'react';

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  bgImage?: string;
  crumbs?: Crumb[];
  /** viewport yüksekliği – istersen override et */
  heightClass?: string;
  objectPosition?: string;
  /** başlığa ekstra sınıf eklemek için */
  titleClassName?: string;
  children?: React.ReactNode;
};

function prettify(segment: string) {
  const clean = decodeURIComponent(segment).replace(/-/g, ' ');
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function buildCrumbsFromPath(pathname: string): Crumb[] {
  const parts = pathname.split('/').filter(Boolean);
  const base: Crumb[] = [{ label: 'Ana Sayfa', href: '/' }];
  let href = '';
  const acc = parts.map((p, i) => {
    href += `/${p}`;
    return { label: prettify(p), href: i < parts.length - 1 ? href : undefined };
  });
  return [...base, ...acc];
}

export default function PageHeader({
  title,
  bgImage = '/asansor-1.jpg',
  crumbs,
  heightClass = 'min-h-[56svh] md:min-h-[70svh]',
  objectPosition = '50% 40%',
  titleClassName = '',
  children,
}: Props) {
  const pathname = usePathname();
  const autoCrumbs = React.useMemo(
    () => (crumbs?.length ? crumbs : buildCrumbsFromPath(pathname)),
    [crumbs, pathname]
  );

  return (
    <header className={`relative isolate w-full overflow-hidden overlap-header ${heightClass}`} aria-label={title}>
      {/* BG */}
      <Image
        src={bgImage}
        alt=""
        fill
        priority
        className="absolute inset-0 -z-20 object-cover"
        style={{ objectPosition }}
      />

      {/* overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,.35) 45%, rgba(0,0,0,.7)),
            radial-gradient(80% 60% at 50% 25%, rgba(0,0,0,.35), transparent 70%)
          `,
        }}
      />

      {/* ⬇️ İÇERİK: tam merkez */}
      <div className="absolute inset-0 grid place-items-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className={`text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg ${titleClassName}`}>
            {title}
          </h1>

          <nav className="mt-3 text-sm md:text-base text-white/90" aria-label="breadcrumb">
            <ol className="flex flex-wrap items-center justify-center gap-2">
              {autoCrumbs.map((c, i) => {
                const isLast = i === autoCrumbs.length - 1;
                return (
                  <li key={`${c.label}-${i}`} className="inline-flex items-center gap-2">
                    {c.href && !isLast ? (
                      <Link href={c.href} className="hover:underline underline-offset-4 text-white/90">
                        {c.label}
                      </Link>
                    ) : (
                      <span className="text-white/95 font-medium">{c.label}</span>
                    )}
                    {!isLast && <ChevronRight className="h-4 w-4 opacity-80" />}
                  </li>
                );
              })}
            </ol>
          </nav>

          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}
