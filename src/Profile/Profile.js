import React from 'react'
import './Profile.scss'
import codepen from './Buttons/codepen_button1.svg'
import github from './Buttons/github_button1.svg'
import instagram from './Buttons/insta_button1.svg'
import linkedin from './Buttons/linkedin_button1.svg'
import medium from './Buttons/medium_button1.svg'
import behance from './Buttons/behance_button1.svg'
import dribbble from './Buttons/dribble_button1.svg'

function Profile() {

  return (
    <div className='profile_container'>
      <h1 className='profile_header'>Anna's Profile</h1>

      {/* Buttons */}
      <div className='profile_buttons'>
        <img src={behance} />
        <img src={dribbble} />
        <img src={medium} />
        <img src={linkedin} />
        <img src={instagram} />
        <img src={github} />
        <img src={codepen} />
      </div>

    </div>

  )
}

export default Profile