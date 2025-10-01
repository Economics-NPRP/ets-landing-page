import "../../styles/main/features.css"
import { FeaturesContent } from "../main/content"
const Features = () => {
  return (
    <section id="features">
      <h1>{FeaturesContent.title[0]} <br className="new-line" /> {FeaturesContent.title[1]}</h1>
      <div id="features-container">
        {FeaturesContent.features.map((feature, index) => (
          <figure key={index+"feature"} className="feature">
            <div className="icon-background">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <figcaption className="feature-text">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Features