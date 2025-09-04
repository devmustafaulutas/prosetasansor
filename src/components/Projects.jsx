import React from 'react'

const refs = Array.from({ length: 6 }).map((_, i) => ({
  t: `Proje #${i + 1}`,
  d: 'Konut/Ticari proje için MRL/hidrolik çözüm; teslim & devreye alma.',
}))

export default function Projects() {
  return (
    <section id="projeler" className="section">
      <div className="mb-10">
        <h2 className="text-2xl font-bold md:text-3xl" data-reveal>Referans Projeler</h2>
        <p className="mt-2 max-w-2xl text-neutral-300" data-reveal>
          Seçili işlerden örnekler. Talep halinde detaylı referans listesi iletiriz.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {refs.map((p, i) => (
          <article key={i} className="card p-4 group overflow-hidden" data-reveal>
            <div className="h-40 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition" />
            <h3 className="mt-3 text-lg font-semibold">{p.t}</h3>
            <p className="text-sm text-neutral-300">{p.d}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
