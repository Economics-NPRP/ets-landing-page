import { Reveal, SplitText } from "../motion"

const BENEFITS = [
  ["For Governments", "building-bank", "Oversight of both markets", "Allocate permits, verify credit registrations, and monitor all trading in real time."],
  ["For Businesses", "users", "Two ways to manage your footprint", "Buy the permits you need and turn your verified reductions into tradable credits."],
  ["For Stakeholders", "eye", "Full visibility on both assets", "Prices, history, and analytics for permits and credits alike."],
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
