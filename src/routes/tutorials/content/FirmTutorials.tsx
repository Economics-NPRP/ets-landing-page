import { useQueryState } from "nuqs"

import Navigation from "/src/components/common/Navigation"
import { Video, Content } from "/src/components/tutorials/content"

import "/src/styles/tutorials/firm.css"

const FirmTutorials = () => {

  const [step, setStep] = useQueryState("step", {
    defaultValue: "1"
  })

  const maxSteps = 4

  const handleStep = (action: "next" | "prev") => setStep(p => {
    if (!p) return "1"
    const stepNum = parseInt(p)
    if (action === "next") {
      return stepNum < maxSteps ? (stepNum + 1).toString() : p
    } else {
      return stepNum > 1 ? (stepNum - 1).toString() : p
    }
  })

  return (
    <>
      <Navigation style="dark" />
      <div id="tut-container">
        <Video step={step} handleStep={handleStep} />
        <Content step={step} setStep={setStep} />
      </div>
    </>
  )
}

export default FirmTutorials