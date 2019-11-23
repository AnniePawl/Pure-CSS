import React from 'react'
import './styles/Project.scss'
import Pom from '../Fruits/Pom/Pom'


function Project() {
  return (
    <div className='about__container'>

      <div className='about__content'>
        <h1 className='about__title'>What is This?</h1>
        <p></p>
      </div>

      <div>
        <Pom />
      </div>

    </div>
  )
}


export default Project