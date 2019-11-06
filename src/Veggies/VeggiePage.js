import React from 'react'
import Display from '../Display/Display'
import bag from './VeggieItems'



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
    <div>
      <h1>Veggie Page!</h1>
      {things}
    </div>

  )
}

export default VeggiePage