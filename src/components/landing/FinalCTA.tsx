import { Magnetic, Reveal, SplitText } from "../motion"
import { REGISTER_URL } from "../links"

const FinalCTA = () => (
  <section id="finalcta" className="cta">
    <div className="container cta__inner">
      <div className="cta__text">
        <h2><SplitText text="Start Trading Permits with Confidence" stagger={0.07} /></h2>
        <Reveal delay={0.3} y={20}>
          <p>Join thousands of organizations already using ETS to streamline their emission trading processes</p>
        </Reveal>
      </div>
      <Reveal delay={0.45} y={20}>
        <Magnetic>
          <a href={REGISTER_URL} target="_blank" rel="noreferrer" className="cta__btn">Register Now<i className="ti ti-arrow-right" /></a>
        </Magnetic>
      </Reveal>
    </div>
  </section>
)

export default FinalCTA
