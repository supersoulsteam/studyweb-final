import Footer from "./footer"
import "../CSS/career.css"
import e from "../assets/e.png"
// import s from "../assets/s.pdf"
import Navbar from "./navbar"
const Career = () => {
  return (
    <div className="career=main">
      <Navbar/>
      <div className="tc">
        <h1>COUNSELLOR</h1>
      </div>
      <div className="c-m">
        <div className="counsellor-ai-main">
          <iframe className="counsellor-ai" src="https://privatesbhtib-soul-soother-supersouls.hf.space"></iframe>
        </div>
      </div>
      <div className="c-features-main">
        <div className="c-feature-head">
          <h1>FEATURES</h1>
        </div>
        <div className="c-feature-left">
          <div className="c-img-left">
            <img className="c-image" src={e} alt="" />
          </div>
          <div className="c-img-text-left">HIGH END SYSTEMS</div>
        </div>
        <div className="c-feature-right">
          <div className="c-img-text-right">EXTREMElY FAST PERFORMANCE</div>
          <div className="c-img-right">
            <img className="c-image" src={e} alt="" />
          </div>
        </div>
        <div className="c-feature-left">
          <div className="c-img-left">
            <img className="c-image" src={e} alt="" />
          </div>
          <div className="c-img-text-left">TENSOR PROCESSING</div>
        </div>
        <div className="c-feature-right">
          <div className="c-img-text-right">FEATURE 3</div>
          <div className="c-img-right">
            <img className="c-image" src={e} alt="" />
          </div>
        </div>
      </div>
      <div className="c-h-i-w-main">
        <div className="c-h-i-w-text">
          <h1>HOW IT WORKS ?</h1>
        </div>
        <div className="c-t-b">
          <div className="c-box"></div>
          <div className="c-box"></div>
          <div className="c-box"></div>
        </div>
        <div className="c-h-i-w-text-main">
          <div className="c-hiwt">
           
          </div>
        </div>
      </div>
      <div className="c-citation-main">
        <div className="c-citation-main-heading">
          <h1>ADVANTAGES</h1>
        </div>
        <div className="c-citation-iframe-main">
          <div className="c-citation-outer">
            {/* <iframe className="c-citation-iframe" src={s}></iframe> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Career