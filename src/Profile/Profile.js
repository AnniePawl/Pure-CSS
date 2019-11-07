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
      <img className='profile_wave' src={wave} />

      {/* Buttons */}
      <div className='profile_buttons'>
        <img className='profile_button' src={behance} />
        <img className='profile_button' src={dribbble} />
        <img className='profile_button' src={medium} />
        <img className='profile_button' src={linkedin} />
        <img className='profile_button' src={instagram} />
        <img className='profile_button' src={github} />
        <img className='profile_button' src={codepen} />
      </div>


      <img className='profile_banner' src={banner} />


      <div className='wave'></div>
    </div>

  )
}

export default Profile