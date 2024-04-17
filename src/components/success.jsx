import '../CSS/success.css'
import t1 from "../assets/t1.png"
import t2 from "../assets/t2.png"
import t3 from "../assets/t3.png"
import t4 from "../assets/t4.png"
const Success = () => {
    return (
        <div className='container-home-success'>
            <div className='tweet1'>
                <h1>SUCCESS STORIES</h1>
                <div className="slider1">
                    <div className="slide-track1">
                        <div className="slide1">
                            <img className="tweets" src={t1} alt="course 1"/>
                        </div>
                        <div className="slide1">
                            <img className="tweets" src={t2} alt="course 2"/>
                        </div>
                        <div className="slide1">
                            <img className="tweets" src={t3} alt="course 3"/>
                        </div>
                        <div className="slide1">
                            <img className="tweets" src={t4} alt="course 4"/>
                        </div>
                        <div className="slide1">
                            <img className="tweets" src={t2} alt="course 5"/>
                        </div>
                        <div className="slide1">
                            <img className="tweets" src={t3} alt="course 6"/>
                        </div>
                        <div className="slide1">
                            <img className="tweets" src={t4} alt="course 7"/>
                        </div>
                        <div className="slide1">
                            <img className="tweets" src={t2} alt="course 8"/>
                        </div>
                        <div className="slide1">
                            <img className="tweets" src={t3} alt="course 9"/>
                        </div>
                        <div className="slide1">
                            <img className="tweets" src={t1} alt="course 10"/>
                        </div>
                    </div>
                </div>

            </div>
            <div className='tweet2'>
                <div className="slider2">
                    <div className="slide-track2">
                        <div className="slide2">
                            <img className="tweets" src={t1} alt="course 1"/>
                        </div>
                        <div className="slide2">
                            <img className="tweets" src={t2} alt="course 2"/>
                        </div>
                        <div className="slide2">
                            <img className="tweets" src={t3} alt="course 3"/>
                        </div>
                        <div className="slide2">
                            <img className="tweets" src={t1} alt="course 4"/>
                        </div>
                        <div className="slide2">
                            <img className="tweets" src={t2} alt="course 5"/>
                        </div>
                        <div className="slide2">
                            <img className= "tweets" src={t3} alt="course 6"/>
                        </div>
                        <div className="slide2">
                            <img className="tweets" src={t1} alt="course 7"/>
                        </div>
                        <div className="slide2">
                            <img className="tweets" src={t2} alt="course 8"/>
                        </div>
                        <div className="slide2">
                            <img className="tweets" src={t3} alt="course 9"/>
                        </div>
                        <div className="slide2">
                            <img className="tweets" src={t1} alt="course 10"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Success