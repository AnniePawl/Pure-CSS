import React from 'react'
import bag from './CandyItems'
import Display from '../Display/Display'
import './CandyPage.scss'

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
    <div className='candy_page'>
      <h1 className='candy_page_heading'>Candy Coming Soon</h1>

      {things}

    </div>
  )
}

export default CandyPage