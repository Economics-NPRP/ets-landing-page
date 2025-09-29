const ContactUs = ({ content }: { content: Record<string, any> }) => {
  return (
    <>
      <h4 className="footer-title">Contact Us</h4>
      <ul>
        {content.contactUs.map((link: { label: string; url: string }) => (
          <li key={link.url}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ContactUs