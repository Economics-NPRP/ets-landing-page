import { NavLink } from "react-router"

const Hero = () => {
  return (
    <section id='header-text'>
      <h1>Transparent & Secure Permit <br />Auctions for Regulated Industries</h1>
      <p>ETS connects governments, businesses, and stakeholders through a modern
        platform <br />that simplifies permit allocation, bidding, and compliance.</p>
      <div id="header-cta-group">
        <a href="https://platform.ets-gcc.org" target='_blank' className="header-cta-primary">Get Started</a>
        <NavLink to="/tutorials" className="header-cta-secondary">How to Use</NavLink>
      </div>
    </section>
  )
}

export default Hero