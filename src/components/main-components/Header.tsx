import '../../styles/main-components/header.css'

const Header = () => {
  return (
    <header style={{ height: "100dvh", backgroundColor: "lightblue" }}>
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
    </header>
  )
}

export default Header