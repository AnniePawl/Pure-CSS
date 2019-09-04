import React from 'react'
import './Pear.css'

function Pear() {
  return (

    <div className='pear_container'>


      <div className='total_pear'>
        {/* Pear Base */}
        <div className='pear'>



          <div className='pear_top'>

            <div className='pear_top_shadow'></div>
          </div>

          {/* Pear Bottom */}
          <div className='pear_bottom'>
            <div className='pear_bottom_shadow'>
            </div>
          </div>


          <div className='pear_stem'>

            <div className='pear_leaf'></div>

          </div>



        </div>
      </div>

    </div>
  )
}

export default Pear