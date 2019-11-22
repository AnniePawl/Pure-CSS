import React from 'react'
import './LandingPage.scss'
import Lime from '../Fruits/Lime/Lime'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
// CUSTOM BUTTON IMPORTS
import behance from './Buttons/behance.svg'
import codepen from './Buttons/codepen.svg'
import dribbble from './Buttons/dribbble.svg'
import github from './Buttons/github.svg'
import instagram from './Buttons/insta.svg'
import linkedin from './Buttons/linkedin.svg'
import medium from './Buttons/medium.svg'


function LandingPage() {
  return (
    <div>

      <div className='landing_stars'></div>


      <div className='landing_container'>

        <div className='heading'>
          <h1 className='landing_page_heading'>Pure CSS<br /> Animations</h1>


          {/* Profile Buttons */}
          <div className='profile_buttons'>

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

            {/* Behance Button */}
            {/* <a className="profile__link" href='https://www.behance.net/annapawl'>
              <img alt='behance' className='profile_button' src={behance} />
            </a> */}

            {/* CodePen Button */}
            <a className="profile__link" href='https://codepen.io/annampawl'>
              <img alt='codepen' className='profile_button' src={codepen} />
            </a>

            {/* Instagram Button */}
            {/* <a className="profile__link" href='https://www.instagram.com/feltthing/'>
              <img alt='instagram' className='profile_button' src={instagram} />
            </a> */}

          </div>

          <h4 className='landing_page_text'>Made With
        ♥  By</h4>

          <h4 className='landing_page_name'>
            <Link className='name' to='/'>ANNA PAWL</Link>
          </h4>

        </div>
        {/* Lime Component */}
        <div className='landing_lime'>
          <Lime />
        </div>

      </div >
    </div>

  )
}

export default withRouter(LandingPage)


