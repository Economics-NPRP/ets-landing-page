import { FooterContent } from "./content"

const Summary = () => {
  return (
    <div id="summary">
      <h4 style={{ fontWeight: "700" }}>{FooterContent.summary.title}</h4>
      <p>{FooterContent.summary.description}</p>
      <div id="social-links">
        <a href={FooterContent.summary.linkedIn.link}>
          <img src={FooterContent.summary.linkedIn.icon} alt="LinkedIn" /></a>
        <a href={FooterContent.summary.facebook.link}>
          <img src={FooterContent.summary.facebook.icon} alt="Facebook" /></a>
      </div>
    </div>
  )
}

export default Summary