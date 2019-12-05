import React from 'react'
import './styles/About.scss'
import Pom from '../Fruits/Pom/Pom'


function Project() {
  return (
    <div className='about__container'>

      <div className='about_top_section'>

        <div className='pom'>
          <Pom />
        </div>

        <div className='about__content'>
          <h1 className='about__title'>What is This?</h1>
          <p></p>
        </div>



      </div>

    </div>
  )
}


export default Project