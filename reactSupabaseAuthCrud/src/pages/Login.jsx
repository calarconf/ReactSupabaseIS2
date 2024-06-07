import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "./useLogin";
import "./LoginStyles.css";

import { Link } from 'react-router-dom';
import logo from "../components/img/Log.png";

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
        <div className="wrapper">
          <div className="row pt-5" style={{ zIndex: 1 }}>
            <div className="col-md-4 offset-md-4">
              <form onSubmit={handleSubmit} className="card card-body">
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control mb-2"
                  required
                />
                <h3>Términos y Condiciones</h3>
                <div className="terms-container mb-3">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="terms"
                    checked={termsAccepted}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="acceptTerms">
                    <Link to="/terms" onClick={() => setTermsAccepted(true)}>
                      Acepto los términos y condiciones
                    </Link>
                  </label>
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
