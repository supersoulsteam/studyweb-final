import Footer from "./footer"
import '../CSS/tests.css'
import e from "../assets/e.gif"
import s from "../assets/s.pdf"
import Navbar from "./navbar"

const Tests = () => {
  return (
    <div className="tests-main">
      <Navbar />
      <div className="tg">
        <h1>TEST GENERATION</h1>
      </div>
      <div className="test-main">
        <div className="test-ai-main">
          <iframe className="test-ai" src="https://privatesbhtib-test-platform.hf.space"></iframe>
        </div>
      </div>
      <div className="test-features-main">
        <div className="test-feature-head">
          <h1>FEATURES</h1>
        </div>
        <div className="test-feature-left">
          <div className="test-img-left">
            <img className="test-image" src={e} alt="" />
          </div>
          <div className="test-img-text-left">High-end systems for AI model development feature robust CPUs, specialized accelerators like GPUs and TPUs, and ample memory. These architectures excel at handling complex computations, enabling rapid iteration and experimentation in AI research. Cloud platforms offer scalable infrastructure, facilitating efficient development and deployment of AI solutions. .</div>
        </div>
        <div className="test-feature-right">
          <div className="test-img-text-right">Achieving extremely fast response times in AI model development hinges on leveraging high-performance computing resources and optimizing workflows. Specialized hardware accelerators like GPUs and TPUs enable swift model training and inference, while parallel processing techniques and distributed computing frameworks further enhance speed and efficiency. Additionally, employing optimized algorithms, model architectures, streamlining the development pipeline.</div>
          <div className="test-img-right">
            <img className="test-image" src={e} alt="" />
          </div>
        </div>
        <div className="test-feature-left">
          <div className="test-img-left">
            <img className="test-image" src={e} alt="" />
          </div>
          <div className="test-img-text-left">In AI mentor platforms, tensor processing is taught through theory, hands-on exercises, projects, and community support. Users learn tensor fundamentals, manipulate tensors using Python and libraries like TensorFlow, and apply them to real-world problems. Projects and challenges deepen understanding, while forums facilitate collaboration. Feedback mechanisms assess users' proficiency, guiding their learning journey.</div>
        </div>
        <div className="test-feature-right">
          <div className="test-img-text-right">User-friendly interfaces in AI mentor platforms prioritize intuitive navigation, clear content organization, and interactive features. They offer easy access to learning resources such as tutorials, lectures, and exercises, with seamless integration of programming environments for hands-on practice. Personalized learning paths cater to individual needs, while progress tracking and feedback mechanisms enhance engagement.</div>
          <div className="test-img-right">
            <img className="test-image" src={e} alt="" />
          </div>
        </div>
      </div>
  
      <div className="test-citation-main">
        <div className="test-citation-main-heading">
          <h1>ADVANTAGES</h1>
        </div>
        <div className="test-citation-iframe-main">
          <div className="test-citation-outer">
            <iframe className="test-citation-iframe" src={s}></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Tests