import { FinalCTAContent } from "./content"
import "../../styles/main/finalcta.css" 

const FinalCTA = () => {
  return (
    <section id="finalcta">
      <h1>{FinalCTAContent.title[0]}<br />{FinalCTAContent.title[1]}</h1>
      <p>{FinalCTAContent.description[0]}<br />{FinalCTAContent.description[1]}</p>
      <a href="https://platform.ets-gcc.org/register" target="_blank">{FinalCTAContent.cta}</a>
    </section>
  )
}

export default FinalCTA