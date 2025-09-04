import React from 'react'
import PageHero from '../components/PageHero'

export default function Contact() {
  return (
    <>
      <PageHero title="İletişim" path="/iletisim" desc="Birlikte planlayalım. Formu doldurun veya telefonla hemen ulaşın." />
      <section className="section">
        <div className="grid gap-6 md:grid-cols-2">
          <form className="card p-6 space-y-3">
            <label className="text-sm">Ad Soyad
              <input className="mt-1 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" placeholder="Adınız Soyadınız" />
            </label>
            <label className="text-sm">E-Posta
              <input type="email" className="mt-1 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" placeholder="ornek@domain.com" />
            </label>
            <label className="text-sm">Telefon
              <input className="mt-1 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2" placeholder="+90" />
            </label>
            <label className="text-sm">Mesaj
              <textarea className="mt-1 w-full rounded-xl bg-neutral-900 border border-neutral-800 px-3 py-2 h-32" placeholder="Kısaca ihtiyacınızı yazın..." />
            </label>
            <button className="btn btn-primary">Gönder</button>
            <p className="small">Form backend’i daha sonra WP/Email ile bağlanacak.</p>
          </form>

          <div className="card p-6">
            <h3 className="text-lg font-semibold">İletişim Bilgileri</h3>
            <ul className="mt-2 space-y-1 small">
              <li>Adres: Ankara • (örnek adres)</li>
              <li>Telefon: <a className="hover:text-white" href="tel:+90xxxxxxxxxx">+90 xxx xxx xx xx</a></li>
              <li>E-Posta: <a className="hover:text-white" href="mailto:info@proset.com.tr">info@proset.com.tr</a></li>
              <li>Çalışma Saatleri: Hafta içi 09:00 – 18:00</li>
            </ul>
            <div className="mt-4 h-40 rounded-xl bg-neutral-900 border border-neutral-800" />
          </div>
        </div>
      </section>
    </>
  )
}
