import "../../styles/main/video.css"
import ReactPlayer from "react-player"
import Thumbnail from "../../../public/main/video/thumbnail.jpg"

const Video = () => {
  return (
    <section id="introduction">
      <h1>Introduction</h1>
      <div id="video-iframe">
        <ReactPlayer
          src="/main/video/video.mp4"
          width="100%"
          height="100%"
          controls
          light={<img src={Thumbnail} alt="Video Thumbnail" />}
        />
      </div>
    </section>
  )
}

export default Video