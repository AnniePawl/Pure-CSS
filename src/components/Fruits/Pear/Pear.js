import React from 'react'
import './Pear.css'

function Pear() {
  return (

    <div className='pear_container'>


      <div className='total_pear'>
        {/* Pear Base */}
        <div className='pear'>
          <div class='pear_shine'></div>



          <div className='pear_top'>

            <div className='pear_top_shadow'></div>
          </div>

          {/* Pear Bottom */}

          <div className='pear_bottom'>


            <div className='pear_bottom_shadow'>
            </div>


            <div className='pear_bud'></div>

            {/* <div className='pear_bottom_outline'></div> */}

          </div>




          <div className='pear_stem'>

            <div className='pear_leaf'></div>
            <div className='pear_leaf2'></div>

          </div>
          <div className='pear_divet'>
            <div className='stem_end'></div>
            <div className='stem_end2'></div>


          </div>




        </div>
      </div>

    </div>
  )
}

export default Pear