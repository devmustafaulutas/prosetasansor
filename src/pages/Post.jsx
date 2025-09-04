import React from 'react'
import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { posts } from '../data/posts'

export default function Post() {
  const { slug } = useParams()
  const idx = posts.findIndex(p => p.slug === slug)
  const post = posts[idx]

  if (!post) {
    return (
      <>
        <PageHero title="Haber Bulunamadı" desc="Aradığınız içerik kaldırılmış olabilir." />
        <section className="section"><Link to="/haberler" className="btn btn-primary">Haberler</Link></section>
      </>
    )
  }

  const prev = posts[idx - 1]
  const next = posts[idx + 1]

  return (
    <>
      <PageHero
        title={post.title}
        desc={post.excerpt}
        path={`/haber/${post.slug}`}
      />
      <title>{post.title} | Proset Asansör</title>
      <meta name="description" content={post.excerpt} />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />

      <section className="section">
        <article className="prose-invert">
          <div className="small text-neutral-400">
            {new Date(post.date).toLocaleDateString('tr-TR')}
          </div>
          <div className="mt-4 text-neutral-200" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        <div className="mt-8 flex justify-between">
          <div>
            {prev && <Link className="btn btn-ghost" to={`/haber/${prev.slug}`}>← {prev.title}</Link>}
          </div>
          <div>
            {next && <Link className="btn btn-ghost" to={`/haber/${next.slug}`}>{next.title} →</Link>}
          </div>
        </div>
      </section>
    </>
  )
}
