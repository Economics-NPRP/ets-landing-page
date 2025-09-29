const QuickLinks = ({ content }: { content: Record<string, any> }) => {
  return (
    <>
      <h4 className="footer-title">Quick Links</h4>
      <ul id="quick-links">
        {content.quickLinks.map((link: { label: string; url: string }) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default QuickLinks