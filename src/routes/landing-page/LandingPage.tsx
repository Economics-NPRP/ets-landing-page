import { Page } from "/src/components/motion"
import Nav from "/src/components/Nav"
import Footer from "/src/components/Footer"
import Hero from "/src/components/landing/Hero"
import Intro from "/src/components/landing/Intro"
import TradingSteps from "/src/components/landing/TradingSteps"
import Features from "/src/components/landing/Features"
import Industries from "/src/components/landing/Industries"
import Benefits from "/src/components/landing/Benefits"
import News from "/src/components/landing/News"
import FinalCTA from "/src/components/landing/FinalCTA"
import "/src/styles/landing.css"

const LandingPage = () => (
  <Page>
    <Nav />
    <Hero />
    <main>
      <Intro />
      <TradingSteps />
      <Features />
      <Industries />
      <Benefits />
      <News />
      <FinalCTA />
    </main>
    <Footer />
  </Page>
)

export default LandingPage
