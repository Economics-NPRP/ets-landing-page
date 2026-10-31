import { useRef, useState } from "react"
import { Link } from "react-router"
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react"
import { SectionHead } from "../motion"
import { ease } from "../easing"

const STEPS = [
  ["Register & Verify", "Create an account as a business, government, or stakeholder.", "1.png"],
  ["Browse Auctions", "Explore auctions related to your category, sector and industry using our advanced search system.", "3.png"],
  ["Bid in Real-Time", "Participate in live auctions securely.", "2.png"],
  ["Manage & Track", "Monitor permits, transactions, and compliance in your dashboard.", "4.png"],
]

const StepBar = ({ progress, i }: { progress: MotionValue<number>; i: number }) => {
  const scaleY = useTransform(progress, [i / 4, (i + 1) / 4], [0.06, 1])
  const opacity = useTransform(progress, v => (v >= i / 4 ? 1 : 0))
  return (
    <div className="steps__bar">
      <motion.div style={{ scaleY, opacity }} />
    </div>
  )
}

/** Pinned section: scrolling through its 320vh advances the four steps. */
const TradingSteps = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  const [active, setActive] = useState(0)
  useMotionValueEvent(scrollYProgress, "change", v => setActive(Math.min(3, Math.floor(v * 4))))

  const goTo = (i: number) => {
    const el = ref.current!
    const top = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top + (el.offsetHeight - window.innerHeight) * (i / 4 + 0.04), behavior: "smooth" })
  }

  return (
    <section id="trading-steps" ref={ref} className="steps">
      <div className="steps__sticky">
        <div className="container steps__inner">
          <SectionHead num="02" title="Start trading permits in simple steps" dark />
          <div className="steps__body">
            <div className="steps__list">
              {STEPS.map(([title, desc], i) => (
                <button key={title} className={"steps__item" + (i <= active ? " is-done" : "") + (i === active ? " is-active" : "")} onClick={() => goTo(i)}>
                  <StepBar progress={scrollYProgress} i={i} />
                  <div className="steps__text">
                    <div className="steps__title"><span>0{i + 1}</span>{title}</div>
                    <AnimatePresence initial={false}>
                      {i === active && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease }}
                        >
                          {desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              ))}
              <Link to="/tutorials" className="btn btn--filled steps__cta">Guide me through<i className="ti ti-arrow-right" /></Link>
            </div>
            <div className="steps__media">
              <AnimatePresence initial={false}>
                <motion.img
                  key={active}
                  src={`/landing-page/main/trading-steps/${STEPS[active][2]}`}
                  alt={STEPS[active][0]}
                  initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.08 }}
                  animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradingSteps
