import React from 'react'
import Display from '../Display/Display'
import bag from './PlantItems'
import './PlantPage.scss'


function PlantPage() {
  const things = bag.map((item) => {
    return (
      <Display
        title={item.name}
        desc={item.desc}
        comp={item.comp}
      />
    )
  })

  return (
    <div>
      <div className='plant_page'>


        <h1 className='plant_heading'>Plant Page!</h1>

        {things}
      </div>
    </div>
  )
}


export default PlantPage