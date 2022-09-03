import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div className='join'>
      <div className="left_j">
         <hr />
         <div>
            <span className='stroke_text'>READY TO</span>
            <span> LEVEL UP</span>
         </div>
         <div>
            <span>YOUR BODY</span>
            <span className='stroke_text'> WITH US?</span>
         </div>
      </div>
      <div className="right_j">
         <form action="" className='email_container'>
            <input type="email"  placeholder='Enter your email adress'/>
            <button className='btn btn-j'>Join now</button>
         </form>
      </div>
    </div>
  )
}

export default Join