import { useState } from "react"

const My_FAQs = ({no,q,a}) => {
  const [show,setshow] = useState(false);
    return (
    <>
      <div className="main">
        <h3>{no}. {q}</h3>
        <p className="icon" onClick={()=>{setshow(!show)}}>{show ? "➖" : "➕" }</p>
        </div>
        {
          show &&  <p className="answer">➡️ {a}</p>  
        }
    </>
  )
}

export default My_FAQs