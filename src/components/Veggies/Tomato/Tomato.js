import React from 'react'
import './Tomato.css'


function Tomato() {
  return (
    <div className='tomato_container'>



      {/* <div className='center_leaves'>
        <div className='center_leaf1'></div>
        <div className='center_leaf2'></div>
      </div>
 
      <div className='tomato_leaves'>

        <div className='tomato_leaf4'></div>
        <div className='tomato_leaf1'></div>
        <div className='tomato_leaf2'></div>
        <div className='tomato_leaf3'></div>
        <div className='tomato_leaf5'></div>
      </div> */}



      {/* Tomato Ends */}
      <div className='tomato_ends'>

        {/* Tomato Top */}
        <div className='tomato_top'>
          <div className='tomato_top_left'></div>
          <div className='tomato_top_middle'>
            <div className='top_nob_shadow'></div>
          </div>
          <div className='tomato_top_right'></div>

        </div>

        {/* Tomato Bottom */}
        <div className='tomato_bottom'>
          <div className='tomato_bottom_left'></div>
          <div className='tomato_bottom_middle'>
            <div className='bottom_nob_shadow'></div>

          </div>
          <div className='tomato_bottom_right'></div>
        </div>

      </div>

      <div className='tomato_base'>

        {/* Tomato Leaves */}
        <div className='tomato_leaves'>

          <div className='tomato_leaf'>
            <div className='tomato_stem'></div>
          </div>
        </div>

        <div className='tomato_shadow'></div>


      </div>

    </div>
  )
}

export default Tomato