import "/src/styles/landing-page/header.css"
import * as HeaderComponent from '../header'
import Navigation from '../../common/Navigation'

const Header = () => {
  return (
    <header>
      <Navigation />
      <HeaderComponent.Hero />
    </header>
  )
}

export default Header