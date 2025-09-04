import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
    return (
        <>
            <title>Proset Asansör | Güvenli ve Enerji Verimli Asansör Sistemleri</title>
            <meta
                name="description"
                content="Yeni montaj, modernizasyon ve periyodik bakım. EN 81-20/50 standartlarına uygun, güvenli ve enerji verimli çözümler."
            />
            <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://www.example.com/'} />

            <header className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 opacity-30 blur-3xl">
                    <div className="absolute -top-20 left-1/2 w-[560px] h-[560px] -translate-x-1/2 rounded-full bg-[color:var(--color-brand)]/40"></div>
                </div>

                <div className="section">
                    <p className="mb-3 text-sm tracking-widest text-indigo-300" data-stagger>ASANSÖR ÇÖZÜMLERİ</p>
                    <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl" data-stagger>
                        Güvenli, <span className="text-indigo-400">sessiz</span> ve <span className="text-indigo-400">enerji verimli</span> asansör sistemleri
                    </h1>
                    <p className="mt-5 max-w-2xl muted" data-stagger>
                        Yeni montaj, modernizasyon ve periyodik bakım hizmetlerini tek çatı altında sunuyoruz. Konut, ticari ve endüstriyel projelerde uçtan uca çözüm.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3" data-stagger>
                        <a href="/hizmetler" className="btn btn-primary">Hizmetler</a>
                        <a href="/iletisim" className="btn btn-ghost">Teklif Al</a>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {[
                            { k: '+12', a: 'Yıllık Deneyim' },
                            { k: '+300', a: 'Tamamlanan Proje' },
                            { k: '%99', a: 'Müşteri Memnuniyeti' },
                            { k: '7/24', a: 'Servis' }
                        ].map((x, i) => (
                            <div key={i} className="card p-4 text-center" data-stagger>
                                <p className="text-3xl font-bold">{x.k}</p>
                                <p className="small mt-1">{x.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </header>
        </>
    )
}
