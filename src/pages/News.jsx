import React from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { posts } from '../data/posts'

export default function News() {
  return (
    <>
      <PageHero
        title="Haberler"
        path="/haberler"
        desc="Enerji verimliliği, güvenlik standartları ve bakım uygulamalarında güncel içerikler."
      />
      <section className="section">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.slug} className="card p-5">
              <div className="small">{new Date(p.date).toLocaleDateString('tr-TR')}</div>
              <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 small muted">{p.excerpt}</p>
              <div className="mt-4">
                <Link className="btn btn-ghost" to={`/haber/${p.slug}`}>Devamını Oku</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
