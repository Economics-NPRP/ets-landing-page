const QuickLinks = ({ content }: { content: Record<string, any> }) => {
  return (
    <div id="quick-links">
      <h4 className="footer-title">Quick Links</h4>
      <ul>
        {content.quickLinks.map((link: { label: string; url: string }) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuickLinks