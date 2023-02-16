import React from 'react'
import { NavLink } from 'react-router-dom';

function header() {
  return (
    <header className="site-header">
        <nav>
            <NavLink to="/" className="link-home">Emotion data</NavLink>
            <NavLink to="/webcam-test">Ajustement webcam</NavLink>
            <NavLink to="/datas">Datas</NavLink>
        </nav>
    </header>
  )
}

export default header