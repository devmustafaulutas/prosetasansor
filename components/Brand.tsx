'use client';

import Link from 'next/link';
import Image from 'next/image';

// tek dosya
import logo from '@/public/Proset.png';

type Props = {
  showText?: boolean;
  /** küçük daha kompakt: sm, standart: md, geniş header: lg */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

/** Proset.png en/boy oranı — logonun gerçek oranına çok yakın */
const AR = 4.7 as const;

const HEIGHT = {
  sm: 28, // mobil
  md: 36, // çoğu desktop için ideal
  lg: 40  // çok geniş header
} as const;

export default function Brand({ showText = true, size = 'md', className }: Props) {
  const h = HEIGHT[size];

  return (
    <Link
      href="/"
      aria-label="PROSET Ana Sayfa"
      className={`inline-flex items-center min-w-0 gap-2 lg:gap-3 ${className ?? ''}`}
    >
      {/* tam logo kadar kutu: padding/rounded yok */}
      <span
        className="relative block shrink-0"
        style={{
          height: `${h}px`,
          aspectRatio: `${AR} / 1` // genişlik = yükseklik * AR
        }}
      >
        <Image
          src={logo}
          alt="PROSET"
          fill
          priority
          sizes={`${Math.round(h * AR)}px`}
          className="object-contain brand-img"
        />
      </span>

      {showText && (
        <span className="hidden lg:inline text-white font-semibold tracking-wide leading-none text-[16px]">
          PROSET ASANSÖR
        </span>
      )}
    </Link>
  );
}
