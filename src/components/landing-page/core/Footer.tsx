import * as FooterComponent from "../footer"
import "/src/styles/landing-page/footer.css"

const Footer = () => {

  return (
    <footer>
      <div id="links-container">
        <FooterComponent.Summary />
        <FooterComponent.QuickLinks />
        <FooterComponent.ContactUs />
        <img id="footer-logo" src={"/logo.svg"} height={110} alt="ets-logo" />
      </div>
      <FooterComponent.Copyright />
    </footer>
  )
}

export default Footer