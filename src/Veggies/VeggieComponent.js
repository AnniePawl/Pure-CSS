import React from 'react'
import './VeggieComponent.scss'

function VeggieComponent() {

  return (
    <div>
      <div className='soil_container'>
        <div className='soil'></div>
      </div>

      {/* SOIL BUMPS */}
      <div className='soil_mounds'>
        <div className='soil_mound soil_mound1'></div>
      </div>
    </div >
  )
}

export default VeggieComponent