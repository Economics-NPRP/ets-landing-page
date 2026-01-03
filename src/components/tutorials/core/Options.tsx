import Option from "./Options/Option"
import { OptionsContent } from "./Options/content"

import "/src/styles/tutorials/options.css"

const Options = () => {
  return (
    <div id="tut-options">
      <Option {...OptionsContent.firm} />
      <Option {...OptionsContent.government} />
    </div>
  )
}

export default Options