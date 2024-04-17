import { useState } from 'react'
import '../CSS/FAQs.css'
import My_FAQs from './My_FAQs'
const faq = [
  {
    no:1,
    q: "What is the goal of your website ?",
    a: "To provide best education using the power of AI"
  },
  {
    no:2,
    q: "Can we get personalised career counselling in your website ?",
    a: "Yes you can ! Our AI counsellors will assist you to get the best career options and opportunities"
  },
  {
    no:3,
    q: "Is there any exam system in your website?",
    a: "Yes, after completing every chapter there will be a test on the basis of the chapter taught and there will be most important questions. "
  },
  {
    no:4,
    q: "Is the AI mentor available 24/7 ?",
    a: "Yes ! The AI mentor is available 24/7 to assist you whenever you need guidance, support, or advice."
  },
  {
    no:5,
    q: "How can an AI mentor help me with my career ?",
    a: "An AI mentor can help you with career exploration, resume building, interview preparation, skill development recommendations, networking tips, and advice on career advancement"
  },
]

const FAQs = () => {

  const [data] = useState(faq)

  return (
    <div className='faq-main'>
        <div className="faq-head">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
        </div>
        <div className="faqs">
          {
            data.map((items,index)=>{ 
              return  <My_FAQs key={index}{...items}/>})
          }
        </div>
    </div>
  )
}

export default FAQs