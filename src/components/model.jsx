import '../CSS/model.css'
import mm from '../assets/mm.gif'
import mm_blue from '../assets/mm_blue.gif'
import {Link} from "react-router-dom"
const Model = () => {
    return (
        <div className="container-home-model">
            <div className="text1">
                <h1>SUPERCHARGE YOUR CAREER</h1>
            </div>
            <div className="text2">
                <h3>WITH PERSONALIZED CAREER GUIDANCE</h3>
            </div>
            <div className="models">
                <div className="container1">
                    <Link to="/mentor"><img className='gif' src={mm} alt="" /></Link>
                </div>
                <div className="container2">
                    <Link to="/mentor"><img className='gif' src={mm_blue} alt="" /></Link>
                </div>
                <div className="container3">
                    <Link to="/mentor"><img className='gif' src={mm} alt="" /></Link>
                </div>
                <div className="container4">
                    <Link to="/mentor"><img className='gif' src={mm_blue} alt="" /></Link>
                </div>
                <div className="container5">
                    <Link to="/mentor"><img className='gif' src={mm} alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Model