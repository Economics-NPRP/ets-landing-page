import { useEffect, useState } from "react"
import { Link } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import { ease } from "../easing"
import { driveEmbed, pad, plural, TRACKS, type Track } from "./data"

type Props = { track: Track; t: number; v: number; watched: Record<string, boolean>; markWatched: (id: string) => void }

/** Video player with prev/next across the whole track and a collapsible outline. */
const Player = ({ track, t, v, watched, markWatched }: Props) => {
  const T = TRACKS[track]
  const tuts = T.tutorials
  const cur = tuts[t]
  const [title, id] = cur.videos[v]
  const [open, setOpen] = useState<Record<number, boolean>>({ [t]: true })

  useEffect(() => {
    markWatched(id)
    setOpen(o => ({ ...o, [t]: true }))
  }, [id, t, markWatched])

  // flat list of [t, v] so prev/next crosses tutorial boundaries
  const flat = tuts.flatMap((x, i) => x.videos.map((_, j) => [i, j] as const))
  const pos = flat.findIndex(([i, j]) => i === t && j === v)
  const prev = flat[pos - 1]
  const next = flat[pos + 1]
  const href = (p: readonly [number, number]) => `?t=${p[0]}&v=${p[1]}`
  const allVideos = flat.length
  const seen = tuts.flatMap(x => x.videos).filter(([, vid]) => watched[vid]).length
  const icon = (vid: string, current: boolean) =>
    current ? "ti ti-player-play-filled is-current" : watched[vid] ? "ti ti-circle-check-filled is-done" : "ti ti-circle"

  return (
    <>
      <div className="player__bar">
        <Link to={T.path} className="btn btn--subtle btn--xs"><i className="ti ti-arrow-left" />All tutorials</Link>
        <span className="player__crumb">
          <span>{T.label}</span><i className="ti ti-chevron-right" /><strong>{pad(t + 1)} {cur.title}</strong>
        </span>
      </div>
      <div className="player">
        <div className="player__main">
          <div className="player__video">
            <AnimatePresence mode="wait">
              <motion.iframe
                key={id}
                src={driveEmbed(id)}
                title={title}
                allow="autoplay; fullscreen"
                allowFullScreen
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease }}
              />
            </AnimatePresence>
          </div>
          <div className="player__segments">
            {cur.videos.map(([vt, vid], j) => (
              <Link key={vid} to={href([t, j])} title={vt} className={j === v ? "is-current" : watched[vid] ? "is-done" : ""} aria-label={vt} />
            ))}
          </div>
          <div className="player__info">
            <div>
              <span className="player__pos">Video {v + 1} of {cur.videos.length}</span>
              <h1>{title}</h1>
              <span className="player__sub">{T.label} · {cur.title}</span>
            </div>
            <div className="player__nav">
              <div className="player__next">
                <span>{next ? (next[0] !== t ? "Next tutorial" : "Up next") : "End of track"}</span>
                <strong>{next ? (next[0] !== t ? `${pad(next[0] + 1)} ${tuts[next[0]].title}` : cur.videos[next[1]][0]) : "You've reached the last video"}</strong>
              </div>
              <div className="player__buttons">
                {prev
                  ? <Link to={href(prev)} className="btn btn--outline btn--md"><i className="ti ti-arrow-left" />Previous</Link>
                  : <button className="btn btn--outline btn--md" disabled><i className="ti ti-arrow-left" />Previous</button>}
                {next
                  ? <Link to={href(next)} className="btn btn--filled btn--md">Next<i className="ti ti-arrow-right" /></Link>
                  : <button className="btn btn--filled btn--md" disabled>Next<i className="ti ti-arrow-right" /></button>}
              </div>
            </div>
          </div>
        </div>

        <aside className="player__outline">
          <div className="player__outline-head">
            <span>{T.label}</span>
            <div className="progress">
              <div><div style={{ width: `${(seen / allVideos) * 100}%` }} /></div>
              <span>{seen} of {allVideos} watched</span>
            </div>
          </div>
          {tuts.map((x, i) => {
            const done = x.videos.filter(([, vid]) => watched[vid]).length
            return (
              <div key={x.title} className="outline">
                <button className={"outline__head" + (i === t ? " is-current" : "")} onClick={() => setOpen(o => ({ ...o, [i]: !o[i] }))} aria-expanded={!!open[i]}>
                  <span className="outline__num">{pad(i + 1)}</span>
                  <span className="outline__title"><strong>{x.title}</strong><span>{done} / {plural(x.videos.length, "video")} watched</span></span>
                  <i className={open[i] ? "ti ti-chevron-up" : "ti ti-chevron-down"} />
                </button>
                <AnimatePresence initial={false}>
                  {open[i] && (
                    <motion.div className="outline__lessons" initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.35, ease }}>
                      {x.videos.map(([vt, vid], j) => (
                        <Link key={vid} to={href([i, j])} className={"outline__lesson" + (i === t && j === v ? " is-current" : "")}>
                          <i className={icon(vid, i === t && j === v)} /><span>{vt}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </aside>
      </div>
    </>
  )
}

export default Player
