import React from 'react'
import './Blueberry.css'

function Blueberry() {
  return (

    <div className='blueberry_container'>
      {/* Blueberry Leaves */}
      <div className='blueberry_leaves'>
        <div className='blueberry_leaf leaf1'></div>
        <div className='blueberry_leaf leaf2'></div>
        <div className='blueberry_leaf leaf3 '></div>
        <div className='blueberry_leaf leaf4'></div>
        <div className='blueberry_leaf leaf5'></div>
      </div>

      <div className='bloobs'>


        {/* Blueberry 1 */}
        <div className='total_blueberry'>

          {/* stars*/}
          <div className='blueberry_stars'>
            <div className='blueberry_star_outer'>
            </div>
            <div className='blueberry_star_inner'> </div>
          </div>

          {/* Blueberry Base */}
          <div className='blueberry_base'>
            <div className='blueberry_shadow'></div>
          </div>

        </div>

        {/* Blueberry 2 */}
        <div className='total_blueberry2'>

          {/* stars*/}
          <div className='blueberry_stars'>
            <div className='blueberry_star_outer'>
            </div>
            <div className='blueberry_star_inner'> </div>
          </div>

          {/* Blueberry Base */}
          <div className='blueberry_base'>
            <div className='blueberry_shadow'></div>
          </div>

        </div>

        {/* Blueberry 3 */}
        <div className='total_blueberry3'>

          {/* stars*/}
          <div className='blueberry_stars'>
            <div className='blueberry_star_outer'>
            </div>
            <div className='blueberry_star_inner'> </div>
          </div>


          {/* Blueberry Base */}
          <div className='blueberry_base'>
            <div className='blueberry_shadow'></div>
          </div>

        </div>

      </div>

    </div>



  )
}



export default Blueberry