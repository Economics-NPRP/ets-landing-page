import { FooterContent } from "./content"

const QuickLinks = () => {
  return (
    <div id="quick-links">
      <h4 className="footer-title">Quick Links</h4>
      <ul>
        {FooterContent.quickLinks.map((link) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuickLinks