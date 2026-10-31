import { Reveal, SectionHead } from "../motion"

const FEATURES = [
  ["Transparent Auctions", "Real-time bidding with instant updates and live market data.", "activity"],
  ["Smart Dashboards", "Track permits, transactions, and compliance all in one place.", "layout-dashboard"],
  ["Advanced Filtering", "Find permits by category, sector, region, or custom criteria.", "filter"],
  ["Analytics & Reports", "Get insights and market trends for smarter investment decisions.", "chart-bar"],
  ["Secure & Compliant", "Fully aligned with government regulations and industry standards.", "shield-check"],
]

const Features = () => (
  <section id="features" className="section section--flush-bottom">
    <div className="container">
      <div className="section-gap"><SectionHead num="03" title="All you need for confident emission trading" /></div>
      <div className="features">
        {FEATURES.map(([title, desc, icon], i) => (
          <Reveal key={title} delay={i * 0.06} y={24}>
            <div className="feature">
              <div className="feature__head">
                <span className="feature__num">0{i + 1}</span>
                <span className="feature__icon"><i className={`ti ti-${icon}`} /></span>
                <h3>{title}</h3>
              </div>
              <p>{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Features
