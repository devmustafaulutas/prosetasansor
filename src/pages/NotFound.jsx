import React from 'react'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <>
      <PageHero title="Sayfa Bulunamadı" desc="Aradığınız sayfa taşınmış veya kaldırılmış olabilir." />
      <section className="section">
        <a href="/" className="btn btn-primary">Ana sayfaya dön</a>
      </section>
    </>
  )
}
