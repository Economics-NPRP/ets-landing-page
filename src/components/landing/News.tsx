import { useEffect, useState } from "react"
import { Reveal, SplitText } from "../motion"
import { API_URL, PLATFORM_URL } from "../links"

// Subset of the backend's NewsArticlePublic (GET /v1/news/public).
type Article = {
  id: string
  headline_en: string
  summary_en: string | null
  source_en: string | null
  category_en: string | null
  category_color: string | null
  hero_image_url: string | null
  publish_at: string | null
}

const articleUrl = (a: Article) => `${PLATFORM_URL}/marketplace/news/${a.id}`
const date = (a: Article) => a.publish_at && new Date(a.publish_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })

/** Latest published news from the backend; renders nothing when there is none (or the API is unreachable). */
const News = () => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const ctrl = new AbortController()
    fetch(`${API_URL}/v1/news/public?per_page=3`, { signal: ctrl.signal })
      .then(r => (r.ok ? r.json() : null))
      .then(d => setArticles(d?.results ?? []))
      .catch(() => {})
    return () => ctrl.abort()
  }, [])

  if (!articles.length) return null
  const [lead, ...side] = articles

  return (
    <section id="news" className="section">
      <div className="container">
        <div className="news__head">
          <h2 className="title-md"><SplitText text="News & Updates" /></h2>
          <a href={`${PLATFORM_URL}/marketplace`} target="_blank" rel="noreferrer" className="btn btn--subtle">View all<i className="ti ti-arrow-up-right" /></a>
        </div>
        <div className={"news__grid" + (side.length ? "" : " news__grid--single")}>
          <Reveal className="news__lead-wrap">
            <a href={articleUrl(lead)} target="_blank" rel="noreferrer" className="news__lead">
              {lead.hero_image_url && <img src={lead.hero_image_url} alt="" />}
              <span className="news__lead-shade" />
              <div className="news__lead-body">
                {lead.category_en && <span className="tag" style={lead.category_color ? { background: lead.category_color } : undefined}>{lead.category_en}</span>}
                <h3>{lead.headline_en}</h3>
                {lead.summary_en && <p>{lead.summary_en}</p>}
                <div className="news__meta"><strong>{lead.source_en}</strong><span>{date(lead)}</span></div>
              </div>
            </a>
          </Reveal>
          {side.length > 0 && (
            <div className="news__side">
              {side.map((a, i) => (
                <Reveal key={a.id} delay={0.1 + i * 0.1}>
                  <a href={articleUrl(a)} target="_blank" rel="noreferrer" className="news__card">
                    {a.hero_image_url && <div className="news__card-img"><img src={a.hero_image_url} alt="" loading="lazy" /></div>}
                    <div className="news__card-body">
                      {a.category_en && <span className="news__category">{a.category_en}</span>}
                      <h3>{a.headline_en}</h3>
                      <div className="news__meta"><span>{a.source_en}</span><span>{date(a)}</span></div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default News
