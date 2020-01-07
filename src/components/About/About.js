import React from 'react'
import './styles/About.scss'
import Pom from '../Fruits/Pom/Pom'


function Project() {
  return (
    <div className='about__container'>

      <div className='about__section'>
        <h1 className='about__title'>About This Project</h1>

        {/* Top Section */}
        <div className='about_top_section'>
          {/* Pom Component */}
          <div className='pom'>
            <Pom />
          </div>
          {/* About Content */}
          <div className='about__content'>

            <p className='about_p'> Hi! Welcome to my collection of CSS animations. This is an ongoing side project that combines my interest in design and code. Every animation on this page is created from scratch using css.  </p>
          </div>

        </div>
      </div >

    </div >
  )
}


export default Project