import { FirmTutorialsContent } from "./content"

const Video = ({ step, handleStep }: TutorialsVideoProps) => {
  
  if (step === null) return <></>

  return (
    <div id="tut-video">
      <h2 id="tut-title">{FirmTutorialsContent[step - 1]?.title}</h2>
      <p id="tut-description">{FirmTutorialsContent[step - 1]?.description}</p>
      <div id="tut-video-container">
        <iframe 
          src={FirmTutorialsContent[step - 1]?.url} 
          width={1000}
          height={1000 * 9 / 16}
        ></iframe>
      </div>
      <div id="tut-buttons">
        <button id="tut-prev" onClick={() => handleStep("prev")}>Previous</button>
        <button id="tut-next" onClick={() => handleStep("next")}>Next</button>
      </div>
    </div>
  )
}

export default Video