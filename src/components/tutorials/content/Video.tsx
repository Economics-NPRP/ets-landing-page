import { FirmTutorialsContent, GovernmentTutorialsContent } from "./content"

const Video = ({ step, handleStep, target }: TutorialsVideoProps) => {
  
  if (step === null) return <></>

  const content = target === "firm" ? FirmTutorialsContent : GovernmentTutorialsContent

  return (
    <div id="tut-video">
      <h2 id="tut-title">{content[step - 1]?.title}</h2>
      <p id="tut-description">{content[step - 1]?.description}</p>
      <div id="tut-video-container">
        <iframe 
          src={content[step - 1]?.url} 
        ></iframe>
      </div>
      <div id="tut-buttons">
        <button id="tut-prev" onClick={() => handleStep("prev")}>Previous</button>
        <button id="tut-next" onClick={() => handleStep("next")}>Next</button>
      </div>
      <div id="tut-progress">
        {
          content.map((_, index) => (
            <div 
              key={"tut-progress-" + (index + 1)} 
              className={"tut-progress-step " + (step - 1 >= index ? "done" : "pending")}
            ></div>
          ))
        }  
      </div>
    </div>
  )
}

export default Video