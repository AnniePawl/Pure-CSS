import React, { Component } from 'react';
import './SmileyFace.css'

function SmileyFace() {
  return (
    <div className='big_container'>

      <h2 className='title'>Smiley Face</h2>

      <div className='smiley_container'>

        <div class='circle'>
          <div className='eyes'>
            <div className='right_eye'></div>
            <div className='left_eye'></div>
          </div>
          <div className='mouth'></div>
        </div>
      </div>

    </div>
  )
}

export default SmileyFace