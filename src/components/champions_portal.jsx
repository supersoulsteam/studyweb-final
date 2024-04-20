import Footer from "./footer"
import '../CSS/champions_portal.css'
import e from "../assets/e.gif"
import s from "../assets/s.pdf"
import Navbar from "./navbar"

const Champions_portal = () => {
  return (
    <div className="champion-main">
      <Navbar />
      <div className="tcp">
        <h1>CHAMPIONS PORTAL</h1>
      </div>
      <div className="cp-main">
        <div className="cp-ai-main">
          <iframe className="cp-ai" src="https://supersouls-champions-portal.hf.space"></iframe>
        </div>
      </div>
      <div className="cp-features-main">
        <div className="cp-feature-head">
          <h1>FEATURES</h1>
        </div>
        <div className="cp-feature-left">
          <div className="cp-img-left">
            <img className="cp-image" src={e} alt="" />
          </div>
          <div className="cp-img-text-left">High-end systems for AI model development feature robust CPUs, specialized accelerators like GPUs and TPUs, and ample memory. These architectures excel at handling complex computations, enabling rapid iteration and experimentation in AI research. Cloud platforms offer scalable infrastructure, facilitating efficient development and deployment of AI solutions. With cutting-edge hardware and scalable environments, developers can harness the power of machine learning to tackle diverse challenges, from natural language processing to computer vision, driving innovation and advancing the capabilities of artificial intelligence in various domains.</div>
        </div>
        <div className="cp-feature-right">
          <div className="cp-img-text-right">Achieving extremely fast response times in AI model development hinges on leveraging high-performance computing resources and optimizing workflows. Specialized hardware accelerators like GPUs and TPUs enable swift model training and inference, while parallel processing techniques and distributed computing frameworks further enhance speed and efficiency. Additionally, employing optimized algorithms, model architectures, and data preprocessing techniques minimizes computational overhead, streamlining the development pipeline.</div>
          <div className="cp-img-right">
            <img className="cp-image" src={e} alt="" />
          </div>
        </div>
        <div className="cp-feature-left">
          <div className="cp-img-left">
            <img className="cp-image" src={e} alt="" />
          </div>
          <div className="cp-img-text-left">In AI mentor platforms, tensor processing is taught through theory, hands-on exercises, projects, and community support. Users learn tensor fundamentals, manipulate tensors using Python and libraries like TensorFlow, and apply them to real-world problems. Projects and challenges deepen understanding, while forums facilitate collaboration. Feedback mechanisms assess users' proficiency, guiding their learning journey.</div>
        </div>
        <div className="cp-feature-right">
          <div className="cp-img-text-right">User-friendly interfaces in AI mentor platforms prioritize intuitive navigation, clear content organization, and interactive features. They offer easy access to learning resources such as tutorials, lectures, and exercises, with seamless integration of programming environments for hands-on practice. Personalized learning paths cater to individual needs, while progress tracking and feedback mechanisms enhance engagement.
          </div>
          <div className="cp-img-right">
            <img className="cp-image" src={e} alt="" />
          </div>
        </div>
      </div>

      <div className="cp-advantage-main">
        <div className="c-citation-main">
          <div className="c-citation-main-heading">
            <h1>ADVANTAGES</h1>
          </div>
          <div className="c-citation-iframe-main">
            <div className="c-citation-outer">
              <iframe className="c-citation-iframe" src={s}></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Champions_portal