import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router"
import "/src/styles/common/back.css"

const Back = ({ link }: { link: string }) => {
  return (
    <NavLink to={link} className="back-button">
      <FontAwesomeIcon className="back-icon" icon={faArrowLeft} />
      <span className="back-text">Back</span>
    </NavLink>
  )
}

export default Back