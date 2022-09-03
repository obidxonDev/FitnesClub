import React from 'react'
import './Testimonals.css'
import { testimonialsData } from '../../data/testimonialsData.js'
import { useState } from 'react'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { motion } from 'framer-motion'

const Testimonals = () => {
   const transition = {type: 'spring', duration: 3}
   const [selected, setSelected] = useState(0)
   const tLength = testimonialsData.length
   return (
      <div className='testimonals' id='testimonial'>
         <div className="left_t">
            <span>Testimonals</span>
            <span className='stroke_text'>What They</span>
            <span>Say About Us</span>
            <motion.span
            key={selected}
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: 100}}
            transition={transition}
            >{testimonialsData[selected].review}</motion.span>
            <span>
               <span style={{ color: "var(--orange)" }}>
                  {testimonialsData[selected].name}
               </span>{" "}
               - {testimonialsData[selected].status}
            </span>
         </div>
         <div className="right_t">
            <motion.div
            initial={{opacity: 0, x: -100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.div
            initial={{opacity: 0, x: 100}}
            transition={{...transition, duration: 2}}
            whileInView={{opacity: 1, x: 0}}
            ></motion.div>
            <motion.img 
            key={selected}
            initial={{opacity: 0.5, x: 100}}
            animate={{opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100}}
            transition={transition}
            src={testimonialsData[selected].image} alt="" />

            <div className="arrows">
               <img onClick={() => {
                  selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1)
               }}
                  src={leftArrow} alt="" /> &nbsp;&nbsp;
               <img onClick={() => {
                  selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
               }}
                  src={rightArrow} alt="" />
            </div>
         </div>
      </div>
   )
}

export default Testimonals