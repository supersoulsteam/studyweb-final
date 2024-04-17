import { Link } from "react-router-dom"
import '../CSS/video_solution.css'

const Video_solution = () => {
  return (
    <div className="container-home-vid">
 
      <div className="main-solution">
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum mollitia tempore consequatur qui exercitationem fugit, totam quidem obcaecati, soluta cupiditate nam aspernatur sequi animi repellendus voluptas rerum libero deleniti nisi natus minus, sapiente architecto expedita. Ab aperiam iure culpa cupiditate, voluptatibus ipsa nobis molestiae esse optio consequuntur itaque nesciunt.
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