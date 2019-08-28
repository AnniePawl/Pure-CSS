import React from 'react'
import './Olive.css'

function Olive() {
  return (
    <div className='big_container'>

      <div className='olive_container'>

        <div className='olive'>
          <div className='olive_hole'></div>

          {/* EYES */}
          <div className='olive_eyes'>
            <div className='olive_right_eye'></div>
            <div className='olive_left_eye'></div>
          </div>

          <div className='olive_mouth'></div>

          <div className='arc'></div>

        </div>

        {/* PICK */}

        <div className='pick_bottom'></div>
        <div className='pick_top'></div>



      </div>

    </div>



  )
}


export default Olive