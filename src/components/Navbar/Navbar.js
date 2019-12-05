import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import './styles/Navbar.scss'

function Navbar() {
  return (

    <div className="nav">
      <nav className='navbar'>
        <ul>

          {/* Anna Link */}
          {/* Open in New Page */}
          <li>
            <Link className="navbar__link" to="/">My Portfolio</Link>
          </li>

          {/* This Project */}
          <li>
            <Link
              className="navbar__link"
              to="about_section"
            >This Project</Link>
          </li>

          {/* Contact Link*/}
          <li>
            <Link className="navbar__link" to="/FruitPage">Contact Me</Link>
          </li>

          {/* Veggie Link */}
          {/* <li>
            <Link className="navbar__link" to="/VeggiePage">Veggie Garden</Link>
          </li> */}

          {/* Space Link */}
          {/* <li>
            <Link className="navbar__link" to="/SpacePage">Space Scene</Link>
          </li> */}

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

