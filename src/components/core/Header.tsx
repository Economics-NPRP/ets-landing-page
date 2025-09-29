import '../../styles/core/header.css'

const Header = () => {
  return (
    <header>
      <nav id="nav-desktop">
        <a href="#nav-desktop">
          <img id="nav-logo" src="/logo.svg" alt="ets-logo" />
        </a>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="https://platform.ets-gcc.org/login" target='_blank' className="nav-cta">Sign In</a></li>
        </ul>
      </nav>
      <section id='header-text'>
        <h1>Transparent & Secure Permit<br/>Auctions for Regulated Industries</h1>
        <p>ETS connects governments, businesses, and stakeholders through a modern
          platform<br/>that simplifies permit allocation, bidding, and compliance.</p>
        <div id="header-cta-group">
          <a href="#" className="header-cta-primary">Get Started</a>
          <a href="#" className="header-cta-secondary">Learn More</a>
        </div>
      </section>
    </header>
  )
}

export default Header