"use client"
import "/src/styles/common/navbar.css"
import { useState } from "react"

const Navigation = ({ style = "light" }: { style?: ("light" | "dark") }) => {
  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <nav>
        <a href="#nav-desktop">
          <img id="nav-logo" className={style} src="/logo.svg" alt="ets-logo" />
        </a>
        <ul className={style} id='nav-desktop'>
          <li><a href="#features">Features</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="https://platform.ets-gcc.org/login" target='_blank' className="nav-cta">Sign In</a></li>
        </ul>
        <div id="mobile-toggle" className={isMobileMenuOpen ? 'active' : ''} onClick={toggleMobileMenu}></div>
      </nav>
      <ul onClick={toggleMobileMenu} id='nav-mobile' className={(isMobileMenuOpen ? 'active ' : ' ')+style}>
        <div className='close'></div>
        <li><a href="#features">Features</a></li>
        <li><a href="#industries">Industries</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="https://platform.ets-gcc.org/login" target='_blank' className="nav-cta">Sign In</a></li>
      </ul>
    </>
  )
}

export default Navigation