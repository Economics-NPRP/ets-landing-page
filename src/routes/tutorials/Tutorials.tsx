import Navigation from "/src/components/common/Navigation"
import Back from "/src/components/common/Back"
import { Header, Options } from "/src/components/tutorials/core"

import "/src/styles/tutorials/main.css"

const Tutorials = () => {
  return (
    <>
      <Back link="/" />
      <Navigation style="dark" />
      <Header />
      <Options />
    </>
  )
}

export default Tutorials