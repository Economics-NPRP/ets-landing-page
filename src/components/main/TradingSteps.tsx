'use client'
import { div } from "motion/react-client"
import "../../styles/main/trading-steps.css"
import { steps } from "../main/content"
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
      setLengths(() => [value*4, 0, 0, 0])
    } else if (value > .25 && value <= .5) {
      setLengths(() => [1, (value-.25)*4, 0, 0])
    } else if (value > .5 && value <= .75) {
      setLengths(() => [1, 1, (value-.5)*4, 0])
    } else if (value > .75) {
      setLengths(() => [1, 1, 1, (value-.75)*4])
    }
    console.log(lengths)
  })
  // Content

  // Animation
  const scale = useTransform(scrollYProgress, [0, 1], [0, 100])

  const easeOutTemplate = cubicBezier(0, .72, .27, 1.01)

  const opacities = [
    useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 1, 0]),
    useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]),
    useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 1, 0]),
    useTransform(scrollYProgress, [0.75, 1], [0, 1]),
  ]

  return (
    <section ref={container} id="trading-steps">
      <div id="content-wrapper">
        <h1>Start trading permits<br />in simple steps</h1>
        <div style={{ position: 'relative' }}> {/* Steps container */}
          {steps.map((step, order) => (
            <motion.figure
              key={order+"step"}
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

        </div>
        {steps.map((step, order) => (
          <div key={order+"pb-wrapper"} className="progress-bar-wrapper">
            <div className="progress-bar" key={order+"pb"}>
              <motion.div key={order} style={{
                display: 'block',
                width: scale,
                height: '10px',
                backgroundColor: 'blue',
              }} />
            </div> 
            <figure>
              <img src={step.icon} alt={step.title}  />
              <figcaption>{step.title}</figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  )
}


export default TradingSteps