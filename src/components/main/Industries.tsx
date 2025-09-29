import "../../styles/main/industries.css"
import { IndustriesContent } from "./content"

const Industries = () => {
  return (
    <section id="industries">
      <h1>{IndustriesContent.title}</h1>
      <div id="industries-container">
        {IndustriesContent.industries.map((industry, index) => (
          <figure key={index + "industry"} className="industry" style={{
            backgroundImage: `url(${industry.background}), linear-gradient(181deg, rgba(0, 0, 0, 0.00) 18.07%, rgba(0, 0, 0, 0.62) 95.71%);` }}>
            <figcaption>{industry.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Industries