import React from 'react'
import './styles/About.scss'
import Pom from '../Fruits/Pom/Pom'

function Project() {
  return (
    <div className='about__container'>

      {/* About Title and Content */}
      <div className='about__content'>
        <h1 className='about__title'>About This Project</h1>
        {/* About Par */}
        <p className='about_p'> Welcome to my collection of CSS animations. This is an ongoing side project that combines my interests in design and code. Every animation on this page is created from scratch by styling div containers with css. </p>
      </div>


      {/* Pom Component */}
      <div className='about__pom'>
        <Pom />
      </div>


    </div >
  )
}


export default Project