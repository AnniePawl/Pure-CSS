import React from 'react'
import bag from './Fruits'
import Display from '../Display/Display'
import './fruits.scss'

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
    <div className='fruit_page'>

      {things}

    </div>
  )
}

export default FruitPage