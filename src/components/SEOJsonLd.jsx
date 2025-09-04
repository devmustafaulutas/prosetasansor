import React from 'react'
import { useLocation } from 'react-router-dom'

export default function SEOJsonLd() {
  const { pathname } = useLocation()
  const base = typeof window !== 'undefined' ? window.location.origin : 'https://www.example.com'
//   const url = `${base}${pathname}`

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Proset Asansör',
    url: base,
    logo: `${base}/logo.png`,
    sameAs: ['https://www.instagram.com/prosetelevator/'], // <-- eklendi
    contactPoint: [{
      '@type': 'ContactPoint',
      telephone: '+90-XXX-XXX-XX-XX',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: ['tr', 'en']
    }]
  }

  const crumbsMap = [
    { path: '/', name: 'Ana Sayfa' },
    { path: '/hakkimizda', name: 'Hakkımızda' },
    { path: '/hizmetler', name: 'Hizmetler' },
    { path: '/urunler', name: 'Ürünler' },
    { path: '/projeler', name: 'Projeler' },
    { path: '/belgeler', name: 'Belgeler' },
    { path: '/haberler', name: 'Haberler' },
    { path: '/iletisim', name: 'İletişim' },
  ]
  const crumbs = [{ '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${base}/` }]
  const hit = crumbsMap.find(c => c.path === pathname)
  if (hit && hit.path !== '/') {
    crumbs.push({ '@type': 'ListItem', position: 2, name: hit.name, item: `${base}${hit.path}` })
  }

  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}
