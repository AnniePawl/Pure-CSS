import React from 'react'
import './Blueberry.scss'

function Blueberry() {
  return (

    <div className='blueberry_container'>

      {/* All Three Bloobs */}
      <div className='bloobs'>

        {/* Blueberry 1 */}
        <div className='total_blueberry'>
          {/* Leaves */}
          <div className='blueberry_leaves1'>
            <div className='blueberry_leaf leaf1'></div>
            <div className='blueberry_leaf leaf2'></div>
          </div>
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

          {/* Leaves */}
          <div className='blueberry_leaves1'>
            <div className='blueberry_leaf leaf1'></div>
            <div className='blueberry_leaf leaf2'></div>
          </div>

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
          {/* Leaves */}
          <div className='blueberry_leaves1'>
            <div className='blueberry_leaf leaf1'></div>
            <div className='blueberry_leaf leaf2'></div>
          </div>

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

      <div className='blueberry_shadows'>
        <div className='blueberry_shadow1'></div>
        <div className='blueberry_shadow2'></div>
        <div className='blueberry_shadow3'></div>
      </div>

    </div>



  )
}



export default Blueberry