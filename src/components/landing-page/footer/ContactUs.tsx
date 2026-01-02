import { FooterContent } from "./content"

const ContactUs = () => {
  return (
    <div id="contact-us">
      <h4 className="footer-title">Contact Us</h4>
      <ul>
        {FooterContent.contactUs.map((contact) => (
          <li key={contact}>
            <span>{contact}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactUs