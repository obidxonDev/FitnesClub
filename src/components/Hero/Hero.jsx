import React from 'react'
import Header from '../Header/Header'
import './Hero.css'

import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
   const transion = {type: 'spring', duration: 3}
   const mobile = window.innerWidth<= 768 ? true : false
  return (
    <div className='hero' id='home'>
      <div className="blur blur_h"></div>
      <div className="left_h">
         <Header/> 

         <div className="the_best_ad">
            <motion.div
               initial={{left: mobile ? '160px' : '238px'}}
               whileInView={{left: '8px'}}
               transition={{...transion, type: 'tween'}}
            ></motion.div>
            <span>the best fitnes club in the town</span>
         </div>

         <div className="hero_text">
            <div className="div">
               <span className='stroke_text'>Shapes </span>
               <span>Your</span>
            </div>
            <div className="div">
               <span>Ideal Body</span>
            </div>
            <div>
               <span>
                in here we will help you to shape and build your ideal body and live up your life to <br /> fullest
               </span>
            </div>
         </div>


         <div className="figures">
            <div>
               <span> <NumberCounter end={140} start={100} preFix="+" delay={4}/></span>
               <span>expert coaches</span>
            </div>
            <div>
               <span><NumberCounter end={978} start={800} preFix="+" delay={4}/></span>
               <span>members joined</span>
            </div>
            <div>
               <span><NumberCounter end={50} start={0} preFix="+" delay={4}/></span>
               <span>fitness programs</span>
            </div>
         </div>

         <div className="hero_buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
         </div>
      </div>
      <div className="right_h">
         <button className='btn'>Join Now</button>


         <motion.div
         transition={transion}
         whileInView={{right: '4rem'}}
         initial={{right: '-1rem'}}
         className="heart_rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
         </motion.div>

         <img className='hero_image' src={hero_image} alt="" />
         <motion.img 
         initial={{right: '11rem'}}
         whileInView={{right: '20rem'}}
         transition={transion}
         className='hero_image_back' src={hero_image_back} alt="" />


         <motion.div 
         initial={{right: '37rem'}}
         whileInView={{right: '28rem'}}
         transition={transion}
         className="calories">
            <img src={Calories} alt="" />
            <div>
               <span>Calories Burned</span>
               <span>220 kcal</span>
            </div>
         </motion.div>

      </div>
    </div>
  )
}

export default Hero