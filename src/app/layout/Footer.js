//===========//
// Footer.js //
//===========//
import React from 'react'

const today = new Date();
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Built on <strong>React</strong> with <strong>Bulma</strong> by <a href="https://github.com/fredrikwoll">Fredrik Woll</a>
          <br />
          Copyright {today.getFullYear()}
        </p>
      </div>
    </div>
  </footer>
)

export default Footer