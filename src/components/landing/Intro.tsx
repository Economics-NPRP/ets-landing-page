import { useRef, useState } from "react"
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "motion/react"
import { SectionHead } from "../motion"

const VIDEO = "/landing-page/main/video/video.mp4"
const POSTER = "/landing-page/main/video/thumbnail.jpg"

const Intro = () => {
  const frame = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)

  // the frame opens up from a smaller window as it scrolls into place
  const { scrollYProgress } = useScroll({ target: frame, offset: ["start end", "start 0.2"] })
  const inset = useTransform(scrollYProgress, [0, 1], [10, 0])
  const clipPath = useMotionTemplate`inset(${inset}% ${inset}% ${inset}% ${inset}%)`
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.3, 1])

  // "Play" chip that trails the cursor over the poster
  const cx = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const cy = useSpring(useMotionValue(0), { stiffness: 300, damping: 30 })
  const [hovering, setHovering] = useState(false)

  return (
    <section id="introduction" className="section">
      <div className="container stack">
        <SectionHead num="01" title="Introduction" />
        <motion.div ref={frame} className="intro__frame" style={{ clipPath }}>
          {playing ? (
            <video src={VIDEO} poster={POSTER} controls autoPlay playsInline />
          ) : (
            <button
              className="intro__poster"
              onClick={() => setPlaying(true)}
              aria-label="Play the introduction video"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              onMouseMove={e => {
                const r = e.currentTarget.getBoundingClientRect()
                cx.set(e.clientX - r.left)
                cy.set(e.clientY - r.top)
              }}
            >
              <motion.img src={POSTER} alt="" style={{ scale: imgScale }} />
              <span className="intro__scrim" />
              <span className="intro__label">
                <span className="intro__play"><i className="ti ti-player-play-filled" /></span>
                Introduction
              </span>
              <motion.span
                className="intro__cursor"
                style={{ x: cx, y: cy }}
                animate={{ scale: hovering ? 1 : 0, opacity: hovering ? 1 : 0 }}
                transition={{ duration: 0.25 }}
              >
                Play
              </motion.span>
            </button>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Intro
