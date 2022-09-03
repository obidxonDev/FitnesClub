import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
    <div className='Programs' id='programs'>
      <div className="programs_header">
         <span className='stroke_text '>Explore our</span>
         <span>Programs</span>
         <span className='stroke_text'>to shape</span>
      </div>

      <div className="program_categories">
        {
          programsData.map(i => 
            <div className='category'>
              {i.image}
              <span>{i.heading}</span>
              <span>{i.details}</span>
              <div className="join_now"><span>Join Now</span> <img src={RightArrow} alt="" /> </div>
            </div>  
          )
        }
      </div>
    </div>
  )
}

export default Programs