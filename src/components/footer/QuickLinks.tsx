import type { FooterContentShape } from "../core/content"

type QuickLinksProps = {
  content: Pick<FooterContentShape, "quickLinks">
}

const QuickLinks = ({ content }: QuickLinksProps) => {
  return (
    <div id="quick-links">
      <h4 className="footer-title">Quick Links</h4>
      <ul>
        {content.quickLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuickLinks