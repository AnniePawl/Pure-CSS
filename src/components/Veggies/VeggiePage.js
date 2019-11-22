import React from 'react'
import './VeggiePage.scss'

function VeggiePage() {

  return (
    <div>
      <div className='veggie_heading'>
        <h1>Welcome to my Vegetable Garden</h1>
        <h3>(In Progress)</h3>
      </div>
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

export default VeggiePage