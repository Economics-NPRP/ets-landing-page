import type { FooterContentShape } from "../core/content"

type ContactUsProps = {
  content: Pick<FooterContentShape, "contactUs">
}

const ContactUs = ({ content }: ContactUsProps) => {
  return (
    <div id="contact-us">
      <h4 className="footer-title">Contact Us</h4>
      <ul>
  {content.contactUs.map((contact) => (
          <li key={contact}>
            <span>{contact}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactUs