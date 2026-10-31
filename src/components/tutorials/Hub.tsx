import { Link } from "react-router"
import { Reveal, SplitText } from "../motion"
import Breadcrumbs from "./Breadcrumbs"
import { pad, plural, TRACKS, type Track } from "./data"

/** Grid of a track's tutorials, each with its thumbnail and watch progress. */
const Hub = ({ track, watched }: { track: Track; watched: Record<string, boolean> }) => {
  const T = TRACKS[track]
  const allVideos = T.tutorials.flatMap(x => x.videos)
  const seen = allVideos.filter(([, id]) => watched[id]).length

  return (
    <>
      <Breadcrumbs trail={[["Home", "/"], ["Tutorials", "/tutorials"], [T.label]]} />
      <div className="tut-head">
        <h1 className="tut-title"><SplitText text={T.label} onMount delay={0.7} /></h1>
        <p>{T.desc}</p>
      </div>
      <div className="tut-meta">
        <strong>{plural(T.tutorials.length, "tutorial")} · {plural(allVideos.length, "video")}</strong>
        <span>{seen} of {allVideos.length} watched</span>
      </div>
      <div className="tut-grid">
        {T.tutorials.map((tut, i) => {
          const n = tut.videos.length
          const done = tut.videos.filter(([, id]) => watched[id]).length
          const next = done === n ? 0 : Math.max(0, tut.videos.findIndex(([, id]) => !watched[id]))
          return (
            <Reveal key={tut.title} delay={(i % 3) * 0.08}>
              <Link to={`?t=${i}&v=${next}`} className="card tut-card">
                <div className="tut-card__thumb">
                  <img src={`/tutorials/thumbnails/${tut.thumbnail}.jpg`} alt="" loading="lazy" />
                  <span className="tut-card__play"><i className="ti ti-player-play-filled" /></span>
                </div>
                <div className="tut-card__body">
                  <div className="tut-card__top">
                    <span className="tut-card__num">{pad(i + 1)}</span>
                    {done === n && <span className="badge badge--green"><i className="ti ti-check" />Completed</span>}
                  </div>
                  <div>
                    <h2>{tut.title}</h2>
                    <span className="tut-card__count"><i className="ti ti-player-play" />{plural(n, "video")}</span>
                  </div>
                  <ol className="tut-card__list">
                    {tut.videos.slice(0, 3).map(([title, id]) => (
                      <li key={id}>
                        <i className={watched[id] ? "ti ti-circle-check-filled is-done" : "ti ti-circle"} />
                        <span>{title}</span>
                      </li>
                    ))}
                    {n > 3 && <li className="tut-card__more">+ {plural(n - 3, "more video")}</li>}
                  </ol>
                  <div className="tut-card__foot">
                    {done > 0 && done < n && (
                      <div className="progress">
                        <div><div style={{ width: `${(done / n) * 100}%` }} /></div>
                        <span>{done} / {n}</span>
                      </div>
                    )}
                    <span className={"btn btn--full " + (done > 0 && done < n ? "btn--filled" : "btn--outline")}>
                      {done === 0 ? "Start tutorial" : done === n ? "Watch again" : "Continue"}
                      <i className="ti ti-arrow-right" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </>
  )
}

export default Hub
