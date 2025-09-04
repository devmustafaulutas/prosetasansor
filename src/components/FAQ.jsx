import React from 'react'

const QA = [
  { q: 'Keşif ve danışmanlık ücretli mi?', a: 'Hayır, keşif ve ön danışmanlık ücretsizdir.' },
  { q: 'Teslim süresi nedir?', a: 'Proje tipine göre değişmekle birlikte tipik olarak 4–10 hafta arasıdır.' },
  { q: 'Bakım hizmeti kapsamı?', a: 'Periyodik kontroller, yağlama, emniyet testleri ve acil arıza müdahalesi dahildir.' },
  { q: 'Standartlara uyum?', a: 'EN 81-20/50 başta olmak üzere ilgili yönetmeliklere uygun çalışırız.' },
]

function Item({ q, a, i }) {
  const [open, setOpen] = React.useState(i === 0)
  return (
    <div className="border-b border-neutral-800">
      <button onClick={() => setOpen(!open)} className="w-full py-4 flex items-center justify-between text-left">
        <span className="font-medium">{q}</span>
        <span className="text-neutral-400">{open ? '—' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-neutral-300">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="sss" className="section">
      <div className="mb-8">
        <h2 className="text-2xl font-bold md:text-3xl" data-reveal>Sık Sorulan Sorular</h2>
        <p className="mt-2 max-w-2xl text-neutral-300" data-reveal>
          Aklınızdaki yaygın sorulara hızlı cevaplar. Daha fazlası için iletişime geçebilirsiniz.
        </p>
      </div>
      <div className="max-w-[860px]">
        {QA.map((x, i) => <Item key={i} q={x.q} a={x.a} i={i} />)}
      </div>
    </section>
  )
}
