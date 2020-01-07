import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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
            <HashLink smooth to="/#about_section"
            >This Project</HashLink>
          </li>

          {/* More Animation Link*/}
          <li>
            <Link className="navbar__link" to="/FruitPage">More Animations</Link>
          </li>

        </ul>
      </nav>

    </div >

  )
}

export default withRouter(Navbar)

