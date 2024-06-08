import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "./useLogin";
import "./LoginStyles.css";

import HeroImg from "../components/img/assets/2.jpg";

import { Link } from 'react-router-dom';
import logo from "../components/img/Log.png";
import Hero from './Hero';

function Login() {
  const {
    email,
    setEmail,
    termsAccepted,
    showTerms,
    error,
    handleSubmit,
    handleCheckboxChange,
  } = useLogin();

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
          heroImg={HeroImg}
        />

        <div className="wrapper">
          <div className="row pt-5" style={{ zIndex: 1 }}>
            <div className="col-md-4 offset-md-4">
              <h3>Dale una segunda vida a tus residuos con Compostify.</h3>
              <form onSubmit={handleSubmit} className="card card-body">
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control mb-2"
                  required
                />

                <div className="terms-container mb-3">

                  <label className="terms-Link" htmlFor="acceptTerms">
                    <p1>Acepto los </p1>
                    <Link to="/terms" onClick={() => setTermsAccepted(true)}>
                      términos y condiciones
                    </Link>
                  </label>
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="terms"
                    checked={termsAccepted}
                    onChange={handleCheckboxChange}
                  />
                  {error && <div className="error">{error}</div>}
                </div>

                <button className="btn btn-primary button-submit" type="submit">
                  Empezar a recolectar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
