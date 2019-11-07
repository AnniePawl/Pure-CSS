import React from 'react'
import './Profile.scss'
import codepen from './Buttons/codepen_button1.svg'
import github from './Buttons/github_button1.svg'
import instagram from './Buttons/insta_button1.svg'
import linkedin from './Buttons/linkedin_button1.svg'
import medium from './Buttons/medium_button1.svg'
import behance from './Buttons/behance_button1.svg'
import dribbble from './Buttons/dribble_button1.svg'
import banner from './Buttons/profile_banner.svg'
import wave from './Buttons/profile_wave.svg'

function Profile() {

  return (
    <div className='profile_container'>
      {/* Wave on Navbar */}
      <img className='profile_wave' src={wave} />

      {/* Profile Buttons */}
      <div className='profile_buttons'>

        {/* Behance Button */}
        <a className="profile__link" href='https://www.behance.net/annapawl'>
          <img className='profile_button' src={behance} />
        </a>

        {/* Dribbble Button */}
        <a className="profile__link" href='https://dribbble.com/annapawl'>
          <img className='profile_button' src={dribbble} />
        </a>

        {/* Medium Button */}
        <a className="profile__link" href='https://medium.com/@annapawl'>
          <img className='profile_button' src={medium} />
        </a>

        {/* LinkedIn Button */}
        <a className="profile__link" href='https://www.linkedin.com/in/annapawl/'>
          <img className='profile_button' src={linkedin} />
        </a>

        {/* Instagram Button */}
        <a className="profile__link" href='https://www.instagram.com/feltthing/'>
          <img className='profile_button' src={instagram} />
        </a>

        {/* Github Button */}
        <a className="profile__link" href='https://github.com/AnniePawl'>
          <img className='profile_button' src={github} />
        </a>

        {/* CodePen Button */}
        <a className="profile__link" href='https://codepen.io/annampawl'>
          <img className='profile_button' src={codepen} />
        </a>

      </div>

      {/* Bottom Banner Design */}
      <img className='profile_banner' src={banner} />


      <div className='wave'></div>
    </div>

  )
}

export default Profile