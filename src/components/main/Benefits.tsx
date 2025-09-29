import { BenefitsContent } from "./content"
import "../../styles/main/benefits.css"

const Benefits = () => {
  return (
    <section id="benefits">
      <h1>{BenefitsContent.title}</h1>
      <img id="line" src={BenefitsContent.image} alt="decoration-line" />
      <div id="benefits-container">
        {BenefitsContent.benefits.map((benefit, index) => (
          <figure key={index + "benefit"} className="benefit">
            <div className="benefit-icon">
              <img src={benefit.icon} alt={benefit.title} /> 
            </div>
            <figcaption>
              <h3>{benefit.title}</h3>
              <p className="short-description">{benefit.short}</p>
              <p className="long-description">{benefit.long}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Benefits