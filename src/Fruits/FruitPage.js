import React from 'react'
import bag from './Fruits'
import Display from '../Display/Display'

function FruitPage() {
  const things = bag.map((item) => {
    return (


      <Display
        title={item.title}
        desc={item.desc}
        comp={item.comp}
      />)
  })

  return (
    <div>
      <h1>Fruit Page</h1>

      {things}

    </div>
  )
}

export default FruitPage