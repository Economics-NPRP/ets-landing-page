import { Link } from "react-router"
import "/src/styles/footer.css"

const QUICK_LINKS = [["/#features", "Features"], ["/#industries", "Industries"], ["/#benefits", "Benefits"], ["/tutorials", "Tutorials"]]

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="/logos/ets-white.svg" alt="ETS" />
          <p>Transforming businesses through intelligent automation and AI - powered solutions.</p>
          <div className="footer__social">
            <a href="#" aria-label="LinkedIn"><i className="ti ti-brand-linkedin" /></a>
            <a href="#" aria-label="Facebook"><i className="ti ti-brand-facebook" /></a>
          </div>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          {QUICK_LINKS.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
        </div>
        <div className="footer__col">
          <h4>Contact Us</h4>
          <span><i className="ti ti-mail" />admin@ets-gcc.org</span>
          <span><i className="ti ti-phone" />+974 4403 6498</span>
          <span><i className="ti ti-map-pin" />Doha, Qatar</span>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} ETS. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
