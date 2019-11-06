import React from 'react'
import bag from './CandyItems'
import Display from '../Display/Display'

function CandyPage() {
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
      <h1>Candy CORN CANDY CORN</h1>

      {things}

    </div>
  )
}

export default CandyPage