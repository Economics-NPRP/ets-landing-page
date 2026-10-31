import { Reveal, SplitText } from "../motion"

const BENEFITS = [
  ["For Governments", "building-bank", "Streamlined allocation & oversight", "Efficient permit distribution, real-time market monitoring, and comprehensive regulatory compliance tracking."],
  ["For Businesses", "users", "Fair access & reduced compliance hassle", "Equal opportunity bidding, simplified compliance processes, and transparent market pricing mechanisms."],
  ["For Stakeholders", "eye", "Transparent, competitive, and science-based auctions", "Complete market visibility, historical data access, and analytical tools for informed decision making."],
]

const Benefits = () => (
  <section id="benefits" className="section benefits">
    <div className="container">
      <h2 className="title-md"><SplitText text="Benefits for Everyone" /></h2>
      <div className="benefits__grid">
        {BENEFITS.map(([title, icon, short, long], i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="card benefit">
              <span className="benefit__icon"><i className={`ti ti-${icon}`} /></span>
              <h3>{title}</h3>
              <p className="benefit__short">{short}</p>
              <p className="benefit__long">{long}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Benefits
