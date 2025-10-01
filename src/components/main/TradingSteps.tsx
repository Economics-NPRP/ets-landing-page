'use client'
import "../../styles/main/trading-steps.css"
import { TradingStepsContent } from "../main/content"
import { motion, cubicBezier, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import { useRef, useState } from "react"

function TradingSteps() {

  const container = useRef(null)
  const [lengths, setLengths] = useState<number[]>([])
  const { scrollYProgress } = useScroll({
    target: container
  })

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value <= .25) {
      setLengths(() => [value * 4, 0, 0, 0])
    } else if (value > .25 && value <= .5) {
      setLengths(() => [1, (value - .25) * 4, 0, 0])
    } else if (value > .5 && value <= .75) {
      setLengths(() => [1, 1, (value - .5) * 4, 0])
    } else if (value > .75) {
      setLengths(() => [1, 1, 1, (value - .75) * 4])
    }
  })
  // Content
  const grayFilter = "brightness(0) saturate(100%) invert(83%) sepia(0%) saturate(3240%) hue-rotate(324deg) brightness(86%) contrast(92%)"
  const primaryFilter = "brightness(0) saturate(100%) invert(13%) sepia(30%) saturate(7091%) hue-rotate(326deg) brightness(93%) contrast(96%)"

  // Animation
  const easeOutTemplate = cubicBezier(0, 1.08, 0, 1)

  const opacities = [
    useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1, 0], { ease: easeOutTemplate }),
    useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0], { ease: easeOutTemplate }),
    useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 1, 0], { ease: easeOutTemplate }),
    useTransform(scrollYProgress, [0.75, 1], [0, 1], { ease: easeOutTemplate }),
  ]

  return (
    <section ref={container} id="trading-steps">
      <div id="content-wrapper">
        <h1>Start trading permits <br className="new-line" />in simple steps</h1>
        <div style={{ position: 'relative' }}> {/* Steps container */}
          {TradingStepsContent.steps.map((step, order) => (
            <motion.figure
              key={order + "step"}
              style={{ opacity: opacities[order] }}
              className="step">
              <figcaption>
                <div className="step-text-container">
                  <h3 className="step-number">Step&nbsp;{order + 1}</h3>
                  <h2 className="step-title">{step.title}</h2>
                  <p className="step-description">{step.description}</p>
                </div>
                <a href="#" className="guide-me-through">Guide me through</a>
              </figcaption>
              <div className="animation-container">
                <img src={step.background} alt={step.title} />
              </div>
            </motion.figure>
          ))}
        </div>
        <div id="progress-bars">
          {TradingStepsContent.steps.map((step, order) => (
            <div key={order + "pb-wrapper"} className="progress-bar-wrapper">
              <div className="progress-bar" key={order + "pb"}>
                <div key={order} className="color" style={{
                  display: 'block',
                  width: lengths[order] * 100 + "%"
                }} />
              </div>
              <figure>
                <img style={{
                  ...(lengths[order] > 0 ? { filter: primaryFilter } : { filter: grayFilter })
                }} src={step.icon} alt={step.title} />
                <figcaption style={{
                  ...(lengths[order] > 0 ? { color: 'var(--primary)' } : { color: 'gray' })
                }}>{step.title}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


export default TradingSteps