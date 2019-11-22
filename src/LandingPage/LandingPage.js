import React from 'react'
import './LandingPage.scss'
import Lime from '../Fruits/Lime/Lime'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import VeggieComponent from '../Veggies/VeggieComponent'
import ButtonComponent from './ButtonComponent/ButtonComponent';


function LandingPage() {
  return (
    <div>
      <div>

        {/* Star Animation */}
        <div className='landing_stars'></div>

        <div className='landing_container'>

          <div className='heading'>
            <h1 className='landing_page_heading'>Pure CSS<br /> Animations</h1>


            {/* Profile Buttons */}
            <div className='profile_buttons'>
              <ButtonComponent />
            </div>

            <h4 className='landing_page_text'>Made With
        ♥  By</h4>

            <h4 className='landing_page_name'>
              <Link className='name' to='/'>ANNA PAWL</Link>
            </h4>

          </div>
          {/* Lime Component */}
          <div className='landing_lime'>
            <Lime />
          </div>

        </div>


        {/* Vegitable Garden Component */}
        {/* <div className='veggie_garden'>
          <VeggieComponent />
        </div> */}


      </div>

    </div>

  )
}

export default withRouter(LandingPage)


