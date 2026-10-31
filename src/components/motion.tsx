import { Fragment, useEffect, useRef, type ReactNode } from "react"
import { useLocation } from "react-router"
import { motion, useMotionValue, useSpring } from "motion/react"
import { ease } from "./easing"

const curtainEase = [0.76, 0, 0.24, 1] as const

/** Fades + rises its children the first time they scroll into view. */
export const Reveal = ({ children, delay = 0, y = 40, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    transition={{ duration: 0.9, ease, delay }}
  >
    {children}
  </motion.div>
)

const word = {
  hidden: { y: "110%" },
  shown: (delay: number) => ({ y: 0, transition: { duration: 0.9, ease, delay } }),
}

/**
 * Masked word-by-word slide-up. `onMount` plays immediately instead of on scroll.
 * The in-view trigger sits on the wrapper: the masked words themselves start
 * fully clipped, so an observer on them would never fire.
 */
export const SplitText = ({ text, delay = 0, stagger = 0.05, onMount = false }: { text: string; delay?: number; stagger?: number; onMount?: boolean }) => (
  <motion.span initial="hidden" {...(onMount ? { animate: "shown" } : { whileInView: "shown", viewport: { once: true } })}>
    {text.split(" ").map((w, i) => (
      <Fragment key={i}>
        <span className="split-word">
          <motion.span variants={word} custom={delay + i * stagger}>{w}</motion.span>
        </span>{" "}
      </Fragment>
    ))}
  </motion.span>
)

/** "01 ─── Title" header whose top rule draws in from the left. */
export const SectionHead = ({ num, title, dark = false }: { num: string; title: string; dark?: boolean }) => (
  <div className={"section-head" + (dark ? " section-head--dark" : "")}>
    <motion.span
      className="section-head__rule"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease }}
    />
    <span className="section-head__num">{num}</span>
    <h2><SplitText text={title} /></h2>
  </div>
)

/** Follows the cursor a little while hovered — for primary CTAs. */
export const Magnetic = ({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) => {
  const ref = useRef<HTMLDivElement>(null)
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 })
  return (
    <motion.div
      ref={ref}
      style={{ x, y, display: "inline-flex" }}
      onMouseMove={e => {
        const r = ref.current!.getBoundingClientRect()
        x.set((e.clientX - r.left - r.width / 2) * strength)
        y.set((e.clientY - r.top - r.height / 2) * strength)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Route wrapper: a maroon curtain lifts off the page on enter and drops back
 * over it on exit (AnimatePresence in App.tsx waits for the exit). Both wipe with
 * clip-path, not scale, so the centred logo is swiped with the curtain, never squashed or faded.
 */
export const Page = ({ children }: { children: ReactNode }) => {
  const { hash } = useLocation()
  useEffect(() => {
    // instant: the curtain hides the jump, and a smooth scroll gets cut short while the page settles
    const id = requestAnimationFrame(() => {
      if (hash) document.querySelector(hash)?.scrollIntoView({ behavior: "instant" })
      else window.scrollTo({ top: 0, behavior: "instant" })
    })
    return () => cancelAnimationFrame(id)
    // only on mount: in-page hash links scroll natively
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {children}
      <motion.div
        className="curtain"
        initial={{ clipPath: "inset(0% 0 0% 0)" }}
        animate={{ clipPath: "inset(0% 0 100% 0)" }}
        transition={{ duration: 0.9, ease: curtainEase, delay: 0.25 }}
      >
        <img src="/logos/ets-white.svg" alt="" />
      </motion.div>
      <motion.div
        className="curtain"
        initial={{ clipPath: "inset(100% 0 0% 0)" }}
        animate={{ clipPath: "inset(100% 0 0% 0)" }}
        exit={{ clipPath: "inset(0% 0 0% 0)" }}
        transition={{ duration: 0.6, ease: curtainEase }}
      >
        <img src="/logos/ets-white.svg" alt="" />
      </motion.div>
    </>
  )
}
