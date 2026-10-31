import { Reveal, SectionHead } from "../motion"

const FEATURES = [
  ["Transparent Auctions", "Live bidding for permits and carbon credits, with instant updates and market data.", "activity"],
  ["Smart Dashboards", "Permit holdings, credit balances, and transactions all in one place.", "layout-dashboard"],
  ["Advanced Filtering", "Find permits and credits by sector, subsector, or custom criteria.", "filter"],
  ["Analytics & Reports", "Market trends across both assets for smarter trading decisions.", "chart-bar"],
  ["Secure & Compliant", "Every trade passes the same government review, whatever the asset.", "shield-check"],
]

const Features = () => (
  <section id="features" className="section section--flush-bottom">
    <div className="container">
      <div className="section-gap"><SectionHead num="03" title="All you need for confident carbon trading" /></div>
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
