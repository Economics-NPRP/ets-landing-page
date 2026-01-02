import "/src/styles/landing-page/main/industries.css"
import { IndustriesContent } from "./content"

const Industries = () => {
  return (
    <section id="industries">
      <h1>{IndustriesContent.title}</h1>
      <div id="industries-container">
        {IndustriesContent.industries.map((industry, index) => (
          <figure key={index + "industry"} className="industry" style={{
            background: `url(${industry.background}) no-repeat center/cover`,
          }}>
            <div className="gradient"></div>
            <figcaption>{industry.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Industries