import React, { Component } from 'react';
import './Portrait.css'

function Portrait() {
  return (
    <div className='big_container'>

      <div className='portrait_container'>
        <div className='portrait_hair'></div>
        <div className='oval'>

          <div className='portrait_eyes'>

            <div className='portrait_right_eye'>

              <div className='portrait_brow'>

              </div>
              <div className='portrait_right_pupil'></div>
              <div className='portrait_tiny_pupil'></div>

            </div>
            <div className='portrait_left_eye'>

              <div className='portrait_brow'>

              </div>
              <div className='portrait_left_pupil'></div>
              <div className='portrait_tiny_pupil'></div>
            </div>
          </div>
          <div className='portrait_mouth'>
            <div className="teeth">
            </div>

          </div>
        </div>



      </div>

    </div>
  )
}

export default Portrait; 
