import Footer from "./footer"
import "../CSS/career.css"
import e from "../assets/e.gif"
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
          <div className="c-img-text-left">High-end systems for AI model development feature robust CPUs, specialized accelerators like GPUs and TPUs, and ample memory. These architectures excel at handling complex computations, enabling rapid iteration and experimentation in AI research. Cloud platforms offer scalable infrastructure, facilitating efficient development and deployment of AI solutions. With cutting-edge hardware and scalable environments, developers can harness the power of machine learning to tackle diverse challenges, from natural language processing to computer vision, driving innovation and advancing the capabilities of artificial intelligence in various domains.</div>
        </div>
        <div className="c-feature-right">
          <div className="c-img-text-right">Achieving extremely fast response times in AI model development hinges on leveraging high-performance computing resources and optimizing workflows. Specialized hardware accelerators like GPUs and TPUs enable swift model training and inference, while parallel processing techniques and distributed computing frameworks further enhance speed and efficiency. Additionally, employing optimized algorithms, model architectures, and data preprocessing techniques minimizes computational overhead, streamlining the development pipeline.</div>
          <div className="c-img-right">
            <img className="c-image" src={e} alt="" />
          </div>
        </div>
        <div className="c-feature-left">
          <div className="c-img-left">
            <img className="c-image" src={e} alt="" />
          </div>
          <div className="c-img-text-left">In AI mentor platforms, tensor processing is taught through theory, hands-on exercises, projects, and community support. Users learn tensor fundamentals, manipulate tensors using Python and libraries like TensorFlow, and apply them to real-world problems. Projects and challenges deepen understanding, while forums facilitate collaboration. Feedback mechanisms assess users' proficiency, guiding their learning journey.</div>
        </div>
        <div className="c-feature-right">
          <div className="c-img-text-right">User-friendly interfaces in AI mentor platforms prioritize intuitive navigation, clear content organization, and interactive features. They offer easy access to learning resources such as tutorials, lectures, and exercises, with seamless integration of programming environments for hands-on practice. Personalized learning paths cater to individual needs, while progress tracking and feedback mechanisms enhance engagement.</div>
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