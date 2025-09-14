import '../../styles/main-components/header.css'

const Header = () => {
  return (
    <header>
      <nav id="nav-desktop">
        <a href="#nav-desktop">
          <img src="/logo.svg" width={81} alt="ets-logo" />
        </a>
        <ul>
          <li><a href="#home">Features</a></li>
          <li><a href="#about">Industries</a></li>
          <li><a href="#services">Benefits</a></li>
          <li><a href="#contact" className="nav-cta">Sign In</a></li>
        </ul>
      </nav>
      <section id='header-text'>
        <h1>Transparent & Secure Permit<br/>Auctions for Regulated Industries</h1>
        <p>ETS connects governments, businesses, and stakeholders through a modern
          platform<br/>that simplifies permit allocation, bidding, and compliance.</p>
        <div id="header-cta-group">
          <a href="#get-started" className="header-cta-primary">Get Started</a>
          <a href="#learn-more" className="header-cta-secondary">Learn More</a>
        </div>
      </section>
    </header>
  )
}

export default Header