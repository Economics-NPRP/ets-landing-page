import { Link } from "react-router"
import { motion, useScroll, useTransform } from "motion/react"
import { SplitText } from "../motion"
import { ease } from "../easing"
import { REGISTER_URL } from "../links"

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease, delay },
})

const Hero = () => {
  const { scrollY } = useScroll()
  const bgY = useTransform(scrollY, [0, 1000], [0, 260])
  const contentY = useTransform(scrollY, [0, 800], [0, -90])
  const contentOpacity = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <header id="top" className="hero">
      <motion.div
        className="hero__bg"
        style={{ y: bgY }}
        initial={{ scale: 1.25 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease, delay: 0.2 }}
      />
      <div className="hero__scrim" />
      <motion.div className="hero__inner" style={{ y: contentY, opacity: contentOpacity }}>
        <div className="hero__content">
          <motion.span className="tag" {...rise(0.8)}>Emission Trading System</motion.span>
          <h1><SplitText text="Trade Emission Permits and Carbon Credits on One Transparent Platform" delay={0.85} onMount /></h1>
          <motion.p {...rise(1.3)}>
            ETS brings governments, businesses and stakeholders together to auction, resell and buy both permits and verified carbon credits, with every trade reviewed and recorded.
          </motion.p>
          <motion.div className="hero__ctas" {...rise(1.45)}>
            <a href={REGISTER_URL} target="_blank" rel="noreferrer" className="btn btn--filled btn--md">Register Now<i className="ti ti-arrow-right" /></a>
            <Link to="/tutorials" className="btn btn--white btn--md"><i className="ti ti-player-play" />How to Use</Link>
          </motion.div>
        </div>
      </motion.div>
      <motion.a href="#introduction" className="hero__scroll" aria-label="Scroll down" {...rise(1.8)}>
        <span />
      </motion.a>
    </header>
  )
}

export default Hero
