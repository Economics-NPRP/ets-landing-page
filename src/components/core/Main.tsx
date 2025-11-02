import '../../styles/core/main.css'
import * as MainComponent from '../main'

const Main = () => {
  return (
    <main>
      <MainComponent.Video />
      <MainComponent.TradingSteps />
      <MainComponent.Features />
      <MainComponent.Industries />
      <MainComponent.Benefits />
      <MainComponent.FinalCTA />
    </main>
  )
}

export default Main