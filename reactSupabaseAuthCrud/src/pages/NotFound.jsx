import React from 'react'
import "./NotFoundStyles.css"

import { Link } from 'react-router-dom';
import logo from "../components/img/Log.png";
import Hero from './Hero';
import img404 from "../components/img/assets/404.jpg";

function NotFound() {
  return (
    <>
      <div className="container">
        <nav className="NavbarItems">
          <Link className="nav-link-logo" to="/">
            <div className="logoContainer">
              <img src={logo} alt="Logo" />
              <h1 className="navbar-logo" >Compostify</h1>
            </div>
          </Link>
        </nav>
        <Hero
          cName="hero"
          heroImg={img404}
        />
        <h1 className='title' style={{ textAlign: 'center' }}>Ups! la pagina que buscas no existe.</h1>
      </div >
    </>

  )
}

export default NotFound