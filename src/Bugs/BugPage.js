import React from 'react'
import bag from './BugItems'
import Display from '../Display/Display'

function BugPage() {
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
      <h1>BUG Page OMG u buggin me</h1>

      {things}

    </div>
  )
}

export default BugPage