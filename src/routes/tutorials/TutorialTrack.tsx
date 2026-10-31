import { useEffect } from "react"
import { useSearchParams } from "react-router"
import { AnimatePresence, motion } from "motion/react"
import { Page } from "/src/components/motion"
import { ease } from "/src/components/easing"
import Nav from "/src/components/Nav"
import Footer from "/src/components/Footer"
import Hub from "/src/components/tutorials/Hub"
import Player from "/src/components/tutorials/Player"
import { TRACKS, useWatched, type Track } from "/src/components/tutorials/data"
import "/src/styles/tutorials.css"

/** `?t=<tutorial>&v=<video>` opens the player; anything else (or out of range) shows the hub. */
const TutorialTrack = ({ track }: { track: Track }) => {
  const [params] = useSearchParams()
  const [watched, markWatched] = useWatched()
  const t = Number(params.get("t"))
  const v = Number(params.get("v") ?? 0)
  const valid = params.has("t") && Number.isInteger(t) && Number.isInteger(v) && !!TRACKS[track].tutorials[t]?.videos[v]
  const view = valid ? "player" : "hub"

  useEffect(() => { window.scrollTo(0, 0) }, [view, t, v])

  return (
    <Page>
      <Nav />
      <main className="tut">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease }}
          >
            {valid
              ? <Player track={track} t={t} v={v} watched={watched} markWatched={markWatched} />
              : <Hub track={track} watched={watched} />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </Page>
  )
}

export default TutorialTrack
