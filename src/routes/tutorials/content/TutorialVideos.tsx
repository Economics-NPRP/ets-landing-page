import { useQueryState } from "nuqs"

import Navigation from "/src/components/common/Navigation"
import Back from "/src/components/common/Back"

import { FirmTutorialsContent, GovernmentTutorialsContent } from "/src/components/tutorials/content/content"
import { Video, Content } from "/src/components/tutorials/content"

import "/src/styles/tutorials/main.css"

const TutorialVideos = ({ target = "firm" }: { target: "firm" | "government" }) => {

  const [step, setStep] = useQueryState("step", {
    defaultValue: "1"
  })

  const maxSteps = target === "firm" ? FirmTutorialsContent.length : GovernmentTutorialsContent.length

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
      <Back link="/tutorials" />
      <Navigation style="dark" />
      <div id="tut-container">
        <Video step={step} handleStep={handleStep} target={target} />
        <Content step={step} setStep={setStep} target={target} />
      </div>
    </>
  )
}

export default TutorialVideos