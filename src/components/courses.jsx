import Footer from "./footer"
import '../CSS/courses.css'
import Navbar from "./navbar"
// import trailer from '../assets/trailer.mp4'

const Courses = () => {
  return (
    <div>
      <Navbar/>
      <div className="c-heading">
        <h1>COURSES</h1>
      </div>
      <div className="divider-main">
        <div className="divider1">
          <h2>SCIENCE COURSES</h2>
        </div>
      </div>
      <div className="pgram-left-main">
        <div className="pgram-left">
        <iframe className="vid-pgram-left" src="https://www.youtube.com/embed/i4EfDf8YEQY?si=nTJQKL1gSRzZzG9e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="pgram-left">
          <iframe className="vid-pgram-left" src="https://www.youtube.com/embed/9fQAGZKwUME?si=0EYWGTpV0YM9BfBV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="pgram-left">
          <iframe className="vid-pgram-left" src="https://www.youtube.com/embed/9fQAGZKwUME?si=0EYWGTpV0YM9BfBV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="divider-main">
        <div className="divider1">
          <h2>Commerce and Arts Courses</h2>
        </div>
      </div>
      <div className="pgram-right-main">
        <div className="pgram-right">
          <iframe className="vid-pgram-right" src="https://www.youtube.com/embed/9fQAGZKwUME?si=0EYWGTpV0YM9BfBV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="pgram-right">
          <iframe  className="vid-pgram-right" src="https://www.youtube.com/embed/9fQAGZKwUME?si=0EYWGTpV0YM9BfBV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="pgram-right">
          <iframe  className="vid-pgram-right" src="https://www.youtube.com/embed/9fQAGZKwUME?si=0EYWGTpV0YM9BfBV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="divider-main">
        <div className="divider1">
          <h2>Programming Courses</h2>
        </div>
      </div>
      <div className="pgram-left-main">
        <div className="pgram-left">
          <iframe className="vid-pgram-left" src="https://www.youtube.com/embed/9fQAGZKwUME?si=0EYWGTpV0YM9BfBV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="pgram-left">
          <iframe className="vid-pgram-left" src="https://www.youtube.com/embed/9fQAGZKwUME?si=0EYWGTpV0YM9BfBV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="pgram-left">
          <iframe className="vid-pgram-left" src="https://www.youtube.com/embed/9fQAGZKwUME?si=0EYWGTpV0YM9BfBV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
      <div className="em-model-main">
        <div className="em-model">
          {/* <iframe className="web" src="https://privatesbhtib-webwanderer.hf.space"></iframe> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses