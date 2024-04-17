import '../CSS/features.css'
import e from '../assets/e.png'
const Features = () => {
    return (
        <div className="container-home-features">
            <h1>WHAT WE PROVIDE ?</h1>
            <div className="main-features">
                <div className="features1">
                <div className="features">
                    <img className='f-img-home' src={e} alt="" />
                </div>
                <div className="features">
                    <img className='f-img-home' src={e} alt="" />
                </div>
                <div className="features">
                    <img className='f-img-home' src={e} alt="" />
                </div>
                </div>
                <div className="features2">
                <div className="features">
                    <img className='f-img-home' src={e} alt="" />
                </div>
                <div className="features">
                    <img className='f-img-home' src={e} alt="" />
                </div>
                <div className="features">
                    <img className='f-img-home' src={e} alt="" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Features