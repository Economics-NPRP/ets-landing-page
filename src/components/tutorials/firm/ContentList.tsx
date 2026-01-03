import { FirmTutorialsContent } from "./content"
import "/src/styles/tutorials/firm.css"
const ContentList = ({ step }: { step: string | null }) => {
  if (step === null) return <></>
  return (
    <div id="tut-f-content-list">
      {FirmTutorialsContent.map((item, index) => (
        <p key={"tut-video-"+(index+1)} className={"tut-step "+(step == (index+1).toString() ? "active" : "inactive")}>
          {item.title}
        </p>
      ))}
    </div>
  )
}

export default ContentList