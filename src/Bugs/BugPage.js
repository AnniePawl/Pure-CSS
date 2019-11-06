import React from 'react'
import bag from './BugItems'
import Display from '../Display/Display'
import './BugPage.scss'

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
    <div className='bug_page'>
      <h1 className='bug_page_heading'>BUG Page OMG u buggin me</h1>

      {things}

    </div>
  )
}

export default BugPage