import React from 'react'
import './styles/Project.scss'
import Pom from '../Fruits/Pom/Pom'


function Project() {
  return (
    <div className='project__container'>
      <h1 className='project__title'>About This Project</h1>

      <div>
        <Pom />

      </div>

    </div>
  )
}


export default Project