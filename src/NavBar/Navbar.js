import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

function NavBar() {
  return (
    <div className="nav">
      <nav className='navbar'>
        <ul>

          {/* Bug Link */}
          <li>
            <Link className="navbar__link" to="/">Bugs</Link>
          </li>

          {/* Candy Link */}
          <li>
            <Link className="navbar__link" to="/">Candy</Link>
          </li>

          {/* Fruit Link */}
          <li>
            <Link className="navbar__link" to="/" >Fruits</Link>
          </li>

          {/* Plant Link */}
          <li>
            <Link className="navbar__link" to="/">Plants</Link>
          </li>

          {/* Veggie Link */}
          <li>
            <Link className="navbar__link" to="/">Vegetables</Link>
          </li>


        </ul>
      </nav>

    </div >

  )
}

export default NavBar

