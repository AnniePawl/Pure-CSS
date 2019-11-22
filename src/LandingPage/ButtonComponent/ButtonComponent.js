import React from 'react'
// CUSTOM BUTTON IMPORTS
import codepen from '../Buttons/codepen.svg'
import dribbble from '../Buttons/dribbble.svg'
import github from '../Buttons/github.svg'
import linkedin from '../Buttons/linkedin.svg'
import medium from '../Buttons/medium.svg'
import '../LandingPage.scss'

function ButtonComponent() {
  return (

    <div>
      {/* Github Button */}
      <a className="profile__link" href='https://github.com/AnniePawl'>
        <img alt='github' className='profile_button' src={github} />
      </a>

      {/* LinkedIn Button */}
      <a className="profile__link" href='https://www.linkedin.com/in/annapawl/'>
        <img alt='linkedin' className='profile_button' src={linkedin} />
      </a>

      {/* Medium Button */}
      <a className="profile__link" href='https://medium.com/@annapawl'>
        <img alt='medium' className='profile_button' src={medium} />
      </a>

      {/* Dribbble Button */}
      <a className="profile__link" href='https://dribbble.com/annapawl'>
        <img alt='dribbble' className='profile_button' src={dribbble} />
      </a>

      {/* CodePen Button */}
      <a className="profile__link" href='https://codepen.io/annampawl'>
        <img alt='codepen' className='profile_button' src={codepen} />
      </a>


    </div>
  )
}

export default ButtonComponent