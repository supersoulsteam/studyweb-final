import Footer from "./footer"
import '../CSS/jobs.css'
import Navbar from "./navbar"
const Jobs = () => {
  return (
    <div className="jobs-main">
      <Navbar/>
      <div className="main-text">
        <h1>Explore Opportunities & Find Your Next Career Move By Our Job Search Engine</h1>
      </div>
      <div className="job-finder">
        <div className="job-search-main">
          <iframe className="job-search" src="https://privatesbhtib-dreamcatcher-supersouls.hf.space"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Jobs