import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false
  const [barOpened, setBarOpened] = useState(false)
  return (
    <div className='header'>
      <img className='logo' src={logo} alt="" />

      {barOpened === false && mobile === true ?

        <div style={{backgroundColor: "var(--appColor)", padding: '0.5rem', borderRadius: '5px'}} onClick={() => setBarOpened(true)}>
          <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}} />
        </div> 
        :
        <ul className='header_menu'>
          <li><Link onClick={() => setBarOpened(false)} to='home' spy={true} smooth={true}>Home</Link></li>
          <li><Link onClick={() => setBarOpened(false)} to='programs' spy={true} smooth={true}>Programs</Link></li>
          <li><Link onClick={() => setBarOpened(false)} to='reasons' spy={true} smooth={true}>Why Us</Link></li>
          <li><Link onClick={() => setBarOpened(false)} to='plans' spy={true} smooth={true}>Plans</Link></li>
          <li><Link onClick={() => setBarOpened(false)} to='testimonial' spy={true} smooth={true}>Testimonials</Link></li>
        </ul>
      }


    </div>
  )
}

export default Header