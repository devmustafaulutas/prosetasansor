import React from 'react'
import PageHero from '../components/PageHero'

export default function About() {
  return (
    <>
      <PageHero
        title="Hakkımızda"
        path="/hakkimizda"
        desc="Proset Asansör; güven, kalite ve estetiği bir araya getiren dikey ulaşım çözümleri sunar."
      />
      <section className="section">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <article className="prose-invert space-y-4">
            <p>
              Proset Asansör, modern şehirlerin vazgeçilmez ihtiyacı olan dikey ulaşım çözümlerini; güven, kalite ve estetik anlayışıyla birleştirerek sunmak amacıyla kurulmuştur. Kuruluşumuzdan bu yana, müşteri memnuniyetini ve güvenliğini temel alan bir anlayışla hareket ediyor, asansör sektöründe öncü ve yenilikçi projelere imza atıyoruz.
            </p>
            <p>
              Yüksek mühendislik standartlarına uygun olarak gerçekleştirdiğimiz asansör montajı, bakım ve modernizasyon hizmetleri, her biri alanında uzman kadromuzla titizlikle yürütülmektedir. Elektronik ve mekanik sistemlerdeki güncel teknolojileri yakından takip ediyor, güvenliği estetikle birleştirerek projelerimize yansıtıyoruz.
            </p>
            <p>
              Proset Asansör olarak; yaşam alanlarından iş merkezlerine, hastanelerden alışveriş merkezlerine kadar farklı ölçeklerdeki projelerde çözüm ortağı oluyoruz. Her biri ihtiyaca özel olarak geliştirilen sistemlerimizle; konforlu, dayanıklı ve uzun ömürlü asansörler sunuyoruz.
            </p>
            <p>
              Sadece bir taşıma sistemi değil, aynı zamanda insanların hayatına değer katan bir hizmet sunduğumuzun bilinciyle çalışıyor; “Her kata güven, her kata kalite” anlayışımızla yükselmeye devam ediyoruz.
            </p>

            <p className="font-semibold">Proset Asansör – Electronic & Elevator Systems</p>
            <p className="small text-neutral-400">Güvenle yükselin.</p>
          </article>

          <aside className="space-y-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold">Vizyonumuz</h3>
              <p className="mt-2 text-neutral-300">
                Yenilikçi, güvenli ve sürdürülebilir asansör çözümleriyle yaşam alanlarını daha erişilebilir ve konforlu hale getirerek, sektörde kalite ve güvenin öncü markası olmak.
              </p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold">Misyonumuz</h3>
              <ul className="mt-2 space-y-2 text-neutral-300 text-sm">
                <li>• Kullanıcı güvenliğini her şeyin üzerinde tutarak uluslararası standartlarda asansör sistemleri üretmek ve sunmak,</li>
                <li>• Montajdan bakıma kadar tüm süreçlerde kesintisiz müşteri memnuniyetini sağlamak,</li>
                <li>• Teknolojik gelişmeleri yakından takip ederek yenilikçi ve enerji verimli çözümler üretmek,</li>
                <li>• Bakım ve onarım hizmetlerinde hızlı, profesyonel ve güvenilir çözümler sunmak,</li>
                <li>• Çevreye ve topluma duyarlı bir anlayışla sektöre katma değer sağlamak.</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-semibold">Değerlerimiz</h3>
              <ul className="mt-2 space-y-2 text-neutral-300 text-sm">
                <li>• <b>Güvenlik:</b> İnsan hayatını merkeze alarak en yüksek güvenlik standartlarını uygulamak.</li>
                <li>• <b>Kalite:</b> Ürün ve hizmetlerde her zaman üstün kaliteyi sürdürmek.</li>
                <li>• <b>Müşteri Memnuniyeti:</b> İhtiyaca özel, hızlı ve etkili çözümler sunmak.</li>
                <li>• <b>Yenilikçilik:</b> Teknolojiyi yakından takip ederek modern ve akıllı çözümler geliştirmek.</li>
                <li>• <b>Şeffaflık & Güven:</b> Tüm süreçlerde dürüst, açık ve güvenilir olmak.</li>
                <li>• <b>Takım Ruhu:</b> Çalışanlarımız, iş ortaklarımız ve müşterilerimizle güçlü bir iş birliği oluşturmak.</li>
                <li>• <b>Çevreye Saygı:</b> Doğaya duyarlı üretim ve bakım hizmetleriyle geleceğe katkı sağlamak.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
