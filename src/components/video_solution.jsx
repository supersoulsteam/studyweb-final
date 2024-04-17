import { Link } from "react-router-dom"
import '../CSS/video_solution.css'

const Video_solution = () => {
  return (
    <div className="container-home-vid">
      <div className="btn">
        <Link><button className="vid-btn">PROBLEM</button></Link>
        <Link><button className="vid-btn">HINT</button></Link>
        <Link><button className="vid-btn">SOLUTION</button></Link>
      </div>
      <div className="main-solution">
        <div className="text">
          Text solution
        </div>
        <div className="video">
          {/* <video className="vid" autoPlay muted controls loop>
            <source src={trailer} />
          </video> */}
        </div>
      </div>
    </div>
  )
}

export default Video_solution