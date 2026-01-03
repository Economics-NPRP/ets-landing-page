import { FirmTutorialsContent } from "./content"

const Video = ({ step, handleStep }: FirmTutorialsVideoProps) => {
  
  if (step === null) return <></>

  return (
    <div id="tut-f-video">
      <h2 id="tut-f-title">{FirmTutorialsContent[step - 1]?.title}</h2>
      <p id="tut-f-description">{FirmTutorialsContent[step - 1]?.description}</p>
      <div id="tut-f-video-container">
        <iframe 
          src={FirmTutorialsContent[step - 1]?.url} 
          width={1000}
          height={1000 * 9 / 16}
        ></iframe>
      </div>
      <div id="tut-f-buttons">
        <button onClick={() => handleStep("prev")}>Previous</button>
        <button onClick={() => handleStep("next")}>Next</button>
      </div>
    </div>
  )
}

export default Video