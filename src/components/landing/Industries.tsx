import type { CSSProperties } from "react"
import { motion } from "motion/react"
import { SectionHead } from "../motion"
import { ease } from "../easing"

const SECTORS = [
  ["energy", "Energy", "bolt"],
  ["industry", "Industry", "building-factory-2"],
  ["transport", "Transport", "truck"],
  ["buildings", "Buildings", "building-community"],
  ["agriculture", "Agriculture", "leaf"],
  ["waste", "Waste", "recycle"],
]

const Industries = () => (
  <section id="industries" className="section section--flush-bottom section--bleed">
    <div className="container section-gap gutter">
      <SectionHead num="04" title="Industries We Target" />
    </div>
    <div className="sectors">
      {SECTORS.map(([id, label, icon], i) => (
        <motion.div
          key={id}
          className="sector"
          style={{ "--sector": `var(--sector-${id})` } as CSSProperties}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 1, ease, delay: (i % 3) * 0.12 }}
        >
          <img src={`/sectors/${id}.jpg`} alt="" loading="lazy" />
          <span className="sector__tint" />
          <span className="sector__shade" />
          <div className="sector__content">
            <span className="sector__icon"><i className={`ti ti-${icon}`} /></span>
            <span className="sector__label">{label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Industries
