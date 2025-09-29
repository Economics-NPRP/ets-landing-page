const ContactUs = ({ content }: { content: Record<string, any> }) => {
  return (
    <div id="contact-us">
      <h4 className="footer-title">Contact Us</h4>
      <ul>
        {content.contactUs.map((contact: string) => (
          <li key={contact}>
            <span>{contact}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactUs