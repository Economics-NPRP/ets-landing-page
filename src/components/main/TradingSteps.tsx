'use client'
import "../../styles/main/trading-steps.css"
import { motion, useScroll, useMotionValueEvent, useTransform } from "motion/react"
import { useRef } from "react"

function TradingSteps() {

  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    container
  })

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value)
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <section ref={container} id="trading-steps">
      <div id="content-wrapper">
        <h1>Start trading permits<br />in simple steps</h1>
        <figure id="step">

        </figure>
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