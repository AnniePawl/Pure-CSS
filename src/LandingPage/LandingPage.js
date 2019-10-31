import React from 'react'
import './LandingPage.scss'
import Lime from '../Fruits/Lime/Lime'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div className='landing_container'>

      <div className='heading'>
        <h1 className='landing_page_heading'>Pure CSS<br /> Animations</h1>

        <h4 className='landing_page_text'>Made With
        ♥  By</h4>

        <h4 className='landing_page_name'>
          <Link className='name' to='/Profile'>ANNA PAWL</Link>
        </h4>

      </div>
      {/* Lime Component */}
      <div className='landing_lime'>
        <Lime />
      </div>

    </div >

  )
}

export default withRouter(LandingPage)


