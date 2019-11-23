import React from 'react'
import './styles/LandingPage.scss'
import Lime from '../Fruits/Lime/Lime'
import Hero from './Hero/Hero'
import About from '../About/About'
import { withRouter } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <div>
        {/* Star Animation */}
        <div className='landing_stars'></div>

        {/* Hero and Lime*/}
        <div className='landing_container'>
          {/* Hero Text Component */}
          <div className='hero'>
            <Hero />
          </div>

          {/* Lime Component */}
          <div className='landing_lime'>
            <Lime />
          </div>
        </div>

        {/* About Section */}
        <About />

      </div>

    </div>

  )
}

export default withRouter(LandingPage)


