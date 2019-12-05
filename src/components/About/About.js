import React from 'react'
import './styles/About.scss'
import Pom from '../Fruits/Pom/Pom'


function Project() {
  return (
    <div className='about__container'>

      {/* Top Section */}
      {/* What Is This? */}
      <div className='about_top_section'>
        {/* Pom Component */}
        <div className='pom'>
          <Pom />
        </div>
        {/* About Content */}
        <div className='about__content'>
          <h1 className='about__title'>About this Project</h1>
          <p className='about_p'> Hi! Welcome to my collection of CSS animations. <br /> This is an ongoing side project that combines my interest in design and code. </p>
        </div>
      </div>

    </div >
  )
}


export default Project