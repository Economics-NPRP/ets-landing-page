const Summary = ({ content }: {content: Record<string, any>}) => {
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