import React from 'react'
import Buttons from '../Buttons/Buttons'
import '../styles/LandingPage.scss'
import { Link } from 'react-router-dom'


function Hero() {
  return (

    <div className='heading'>

      {/* Landing Page Heading */}
      <h1 className='landing_page_heading'>
        Pure CSS<br /> Animations
      </h1>

      {/* Profile Buttons Component */}
      <div className='profile_buttons'>
        <Buttons />
      </div>

      {/* Landing Page Text */}
      <h4 className='landing_page_text'>
        Made With ♥ By
      </h4>

      {/* Link to Portfolio Site */}
      <h4 className='landing_page_name'>
        <Link className='name' to='/'>
          ANNA PAWL
        </Link>
      </h4>

    </div>

  )
}

export default Hero


