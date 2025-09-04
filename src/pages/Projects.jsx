import React from 'react'
import PageHero from '../components/PageHero'

const refs = Array.from({ length: 9 }).map((_, i) => ({
  t: `Proje #${i + 1}`,
  d: 'Konut/Ticari proje için MRL veya hidrolik çözüm; test ve devreye alma dahil teslim.',
}))

export default function Projects() {
  return (
    <>
      <PageHero title="Referans Projeler" path="/projeler" desc="Seçili işlerden örnekler. Talep halinde detaylı referans listesi sağlanır." />
      <section className="section">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {refs.map((p, i) => (
            <article key={i} className="card p-4 group overflow-hidden">
              <div className="h-40 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition" />
              <h3 className="mt-3 text-lg font-semibold">{p.t}</h3>
              <p className="small">{p.d}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
