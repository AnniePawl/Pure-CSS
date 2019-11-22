import React from 'react'
// CUSTOM BUTTON IMPORTS
import codepen from '../../../assets/CustomButtons/codepen.svg'
import dribbble from '../../../assets/CustomButtons/dribbble.svg'
import github from '../../../assets/CustomButtons/github.svg'
import linkedin from '../../../assets/CustomButtons/linkedin.svg'
import medium from '../../../assets/CustomButtons/medium.svg'
import '../styles/LandingPage.scss'

function Buttons() {
  return (

    <div>
      {/* Github Button */}
      <a className="profile__link" href='https://github.com/AnniePawl' target='_blank'>
        <img alt='github' className='profile_button' src={github} />
      </a>

      {/* LinkedIn Button */}
      <a className="profile__link" href='https://www.linkedin.com/in/annapawl/' target='_blank'>
        <img alt='linkedin' className='profile_button' src={linkedin} />
      </a>

      {/* Medium Button */}
      <a className="profile__link" href='https://medium.com/@annapawl' target='_blank'>
        <img alt='medium' className='profile_button' src={medium} />
      </a>

      {/* Dribbble Button */}
      <a className="profile__link" href='https://dribbble.com/annapawl' target='_blank'>
        <img alt='dribbble' className='profile_button' src={dribbble} />
      </a>

      {/* CodePen Button */}
      <a className="profile__link" href='https://codepen.io/annampawl' target='_blank'>
        <img alt='codepen' className='profile_button' src={codepen} />
      </a>
    </div>
  )
}

export default Buttons