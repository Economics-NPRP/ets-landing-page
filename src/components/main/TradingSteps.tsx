'use client'
import "../../styles/main/trading-steps.css"
import { steps } from "../main/content"
import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import { useRef } from "react"

function TradingSteps() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container
  })

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value)
  })
  // Content
  
  // Animation
  const scale = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacities = [
    useTransform(scrollYProgress, [0, 0.25, 0.5], [1, 0, 0]),
    useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]),
    useTransform(scrollYProgress, [0.5, 0.75, 1], [0, 1, 0]),
    useTransform(scrollYProgress, [0.75, 1], [0, 1]),
  ]

  return (
    <section ref={container} id="trading-steps">
      <div id="content-wrapper">
        <h1>Start trading permits<br />in simple steps</h1>
        {steps.map((step, order) => (
          <figure className="step">
            <figcaption>
              <div className="step-text-container">
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
              <a href="#" className="guide-me-through">Guide me through</a>
            </figcaption>
            <img src="" alt="" />
          </figure>
        ))}
        <motion.div style={{
          display: 'block',
          width: scale,
          height: '10px',
          backgroundColor: 'blue',
        }} />
      </div>
    </section>
  )
}

export default TradingSteps