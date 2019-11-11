import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (

    <div className="nav">
      <nav className='navbar'>
        <ul>

          {/* Anna Link */}
          <li>
            <Link className="navbar__link" to="/">Anna</Link>
          </li>


          {/* Fruit Link */}
          <li>
            <Link className="navbar__link" to="/FruitPage" >Funky Fruits</Link>
          </li>

          {/* Veggie Link */}
          <li>
            <Link className="navbar__link" to="/VeggiePage">Veggie Garden</Link>
          </li>


          {/* Space Link */}
          <li>
            <Link className="navbar__link" to="/VeggiePage">Scene From Space</Link>
          </li>


          {/* Bug Link */}
          {/* <li>
            <Link className="navbar__link" to="/BugPage">Bugs</Link>
          </li> */}

          {/* Candy Link */}
          {/* <li>
            <Link className="navbar__link" to="/CandyPage">Candy</Link>
          </li> */}

          {/* Plant Link */}
          {/* <li>
            <Link className="navbar__link" to="/PlantPage">Plants</Link>
          </li> */}



        </ul>
      </nav>

    </div >

  )
}

export default withRouter(Navbar)

