import { FirmTutorialsContent, GovernmentTutorialsContent } from "./content"
import "/src/styles/tutorials/main.css"

const ContentList = ({ step, setStep, target }: TutorialsContentListProps) => {

  if (step === null) return <></>

  const content = (target === "firm" ? FirmTutorialsContent : GovernmentTutorialsContent)

  return (
    <div id="tut-content-list">
      {content.map((item, index) => (
        <p onClick={() => setStep((index + 1).toString())} key={"tut-video-" + (index + 1)} className={"tut-step " + (step == (index + 1).toString() ? "active" : "inactive")}>
          {item.title}
        </p>
      ))}
    </div>
  )
}

export default ContentList