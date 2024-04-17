import '../CSS/resources.css'
import Footer from "./footer"
import Navbar from "./navbar"
const Resources = () => {
    return (
        <div className='resources-main'>
            <Navbar />
            <div className="rt">
                <h1>RESOURCES</h1>
            </div>
            <div className="embed-model-pdf-main">
                <div className="embed-model-pdf-outer">
                    <div className="embed-model-pdf">
                        <iframe className='pdf' src="https://privatesbhtib-pdfwhisperer.hf.space"></iframe>
                    </div>
                </div>
                <div className="f-img-resources1">
                    <img src="" alt="features1" />
                </div>
                <div className="text-box-feature-pdf"></div>
            </div>
            <div className="embed-model-falcon-main">
                <div className="embed-model-falcon-outer">
                    <div className="embed-model-falcon">
                        <iframe className='falcon' src="https://privatesbhtib-falcon-image-analyzer.hf.space"></iframe>
                    </div>
                </div>
                <div className="f-falcon-resources1">
                    <img src="" alt="features2" />
                </div>
                <div className="text-box-feature-falcon"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Resources