import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
   return (
      <div className='footer_container'>
         <hr />
         <div className="footer">
            <div className="social_links">
               <img src={Github} alt="" />
               <img src={Instagram} alt="" />
               <img src={Linkedin} alt="" />
            </div>
            <div className="logo_f">
               <img src={Logo} alt="" />
            </div>
         </div>
         <div className="blur blur_f1"></div>
         <div className="blur blur_f2"></div>
      </div>
   )
}

export default Footer