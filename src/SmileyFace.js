import React, { Component } from 'react';
import './SmileyFace.css'

function SmileyFace() {
  return (
    <div className='big_container'>

      <h2 className='title'>Smiley Face</h2>

      <div className='smiley_container'>
        <div className='circle'>
          <div className='eyes'>
            <div className='right_eye'>
              <div className='right_pupil'></div>
              <div className='tiny_pupil'></div>

            </div>
            <div className='left_eye'>
              <div className='left_pupil'></div>
              <div className='tiny_pupil'></div>
            </div>
          </div>

          <div className='mouth'>
            <div className="teeth">
              <div className="tooth"></div>
              <div className="tooth"></div>
              <div className="tooth"></div>
              <div className="tooth"></div>
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default SmileyFace