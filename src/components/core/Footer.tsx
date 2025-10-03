import { Summary, QuickLinks, ContactUs } from "../footer"
import { FooterContent } from "./content"
import "../../styles/core/footer.css"

const Footer = () => {

  return (
    <footer>
      <div id="links-container">
        <Summary content={FooterContent} />
        <QuickLinks content={FooterContent} /> 
        <ContactUs content={FooterContent} />
        <img id="footer-logo" src={FooterContent.logo} height={110} alt="ets-logo" />
      </div>
      <div id="copyright">
        <span>© 2025 ETS. All rights reserved.</span>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer