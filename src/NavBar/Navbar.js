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

          {/* Bug Link */}
          <li>
            <Link className="navbar__link" to="/BugPage">Bugs</Link>
          </li>

          {/* Candy Link */}
          <li>
            <Link className="navbar__link" to="/CandyPage">Candy</Link>
          </li>

          {/* Fruit Link */}
          <li>
            <Link className="navbar__link" to="/FruitPage" >Fruits</Link>
          </li>

          {/* Plant Link */}
          <li>
            <Link className="navbar__link" to="/PlantPage">Plants</Link>
          </li>

          {/* Veggie Link */}
          <li>
            <Link className="navbar__link" to="/VeggiePage">Vegetables</Link>
          </li>


        </ul>
      </nav>

    </div >

  )
}

export default withRouter(Navbar)

