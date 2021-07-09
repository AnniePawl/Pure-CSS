import React from 'react'
import './circles.css'

function Circles() {
  return(
    <div className='container'>
      <div className='circles'>

        {/* outer circle */}
        <div className='outer_circle'>
          <div className='outer_circle_top'></div>
          <div className='outer_circle_bottom'></div>
        </div>
      
      </div>
        {/* inner circle */}
        <div className='inner_circle'> 
          <div className='inner_circle_top'></div>
          <div className='inner_circle_bottom'></div>
          
        </div>
    </div>

    
  )
}

export default Circles