import React from 'react';
import './Avocado.scss'

function Avocado() {
  return (
    < div className='avocado_container' >
      <div className='total_avocado'>

        {/* Outer Avocado */}
        <div className='outer_avocado'>
          <div className='avocado_outer_top'></div>
          <div className='avocado_outer_bottom'></div>
        </div>

        {/* Inner Avocado */}
        <div className='inner_avocado'>
          <div className='avocado_top'></div>
          <div className='avocado_bottom'></div>
        </div>

      </div>
    </div >



  )
}


export default Avocado