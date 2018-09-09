//===========//
// Header.js //
//===========//
import React from 'react'
import { NavLink } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
          style={{
            borderBottom: 'solid 1px #dddddd',
          }}>
           <NavLink
              className="navbar-item"
              to="/"
              activeClassName="is-active"
            >
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span>
              Home
            </NavLink>
           <NavLink
              className="navbar-item"
              to="/page2"
              activeClassName="is-active"
            >
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span>
              Page2
            </NavLink>
      </nav>
    )
  }
}

export default Header