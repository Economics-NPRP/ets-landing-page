import { NavLink } from "react-router"

const Hero = () => {
  return (
    <section id='header-text'>
      <h1>Transparent & Secure Permit <br />Auctions for Regulated Industries</h1>
      <p>ETS connects governments, businesses, and stakeholders through a modern
        platform <br />that simplifies permit allocation, bidding, and compliance.</p>
      <div id="header-cta-group">
        <NavLink to="/tutorials" className="header-cta-primary">How to Use</NavLink>
        <a href="https://platform.ets-gcc.org" target='_blank' className="header-cta-secondary">Get Started</a>
      </div>
    </section>
  )
}

export default Hero