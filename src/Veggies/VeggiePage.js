import React from 'react'
import Display from '../Display/Display'
import bag from './VeggieItems'
import './VeggiePage.scss'



function VeggiePage() {
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
    <div className='veggie_page'>
      <h1 className='veggie_page_heading'>Veggies Coming Soon</h1>
      {things}
    </div>

  )
}

export default VeggiePage