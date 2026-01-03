import { FirmTutorialsContent } from "./content"
import "/src/styles/tutorials/firm.css"
const ContentList = ({ step, setStep }: { step: string | null, setStep: (step: string) => void }) => {
  if (step === null) return <></>
  return (
    <div id="tut-content-list">
      {FirmTutorialsContent.map((item, index) => (
        <p onClick={() => setStep((index + 1).toString())} key={"tut-video-"+(index+1)} className={"tut-step "+(step == (index+1).toString() ? "active" : "inactive")}>
          {item.title}
        </p>
      ))}
    </div>
  )
}

export default ContentList