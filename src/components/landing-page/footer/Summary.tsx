import type { FooterContentShape } from "../core/content"

type SummaryProps = {
  content: Pick<FooterContentShape, "summary">
}

const Summary = ({ content }: SummaryProps) => {
  return (
    <div id="summary">
      <h4 style={{ fontWeight: "700" }}>{content.summary.title}</h4>
      <p>{content.summary.description}</p>
      <div id="social-links">
        <a href={content.summary.linkedIn.link}>
          <img src={content.summary.linkedIn.icon} alt="LinkedIn" /></a>
        <a href={content.summary.facebook.link}>
          <img src={content.summary.facebook.icon} alt="Facebook" /></a>
      </div>
    </div>
  )
}

export default Summary