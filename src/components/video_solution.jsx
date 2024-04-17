// import { Link } from "react-router-dom"
import '../CSS/video_solution.css'
import trailer from '../assets/trailer.mp4'
const Video_solution = () => {
  return (
    <div className="container-home-vid">
      <h1>EXPLORE OUR FEATURES</h1>
      <div className="main-solution">
        <div className="text">
        Our AI mentor platform integrates PDF Whisperer for content analysis. It offers personalized guidance from AI mentors for job search, tests, and interview prep. Users can access tailored resources to enhance skills and navigate career challenges efficiently thus optimizing their preparation and performance in a concise, user-friendly interface.
        </div>
        <div className="video">
          <video className="vid" autoPlay muted controls loop>
            <source src={trailer} />
          </video>
        </div>
      </div>
    </div>
  )
}

export default Video_solution