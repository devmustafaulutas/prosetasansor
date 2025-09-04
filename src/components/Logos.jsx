import React from 'react'

const data = ['Siemens','Schindler','Kone','Otis','Thyssen','Bosch','Mitsubishi','Hyundai']

export default function Logos() {
  return (
    <section className="section !py-10 border-y border-neutral-900/60">
      <div className="overflow-hidden">
        <div className="marquee">
          {[...data, ...data].map((n, i) => (
            <div key={i} className="logo-tile text-neutral-400 text-sm">
              <div className="px-6 py-2 rounded-lg border border-neutral-800 bg-neutral-900/40">{n}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
