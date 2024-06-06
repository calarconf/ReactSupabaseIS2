import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import useLogin from "./useLogin";
import "./LoginStyles.css";

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
        <Navbar />
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
                    Acepto los términos y condiciones
                  </label>
                  {error && <div className="error">{error}</div>}
                  {showTerms && (
                    <div className="terms-details">
                      <p style={{ textAlign: "justify" }}>
                        Todos los ciudadanos tenemos derecho a conocer, actualizar y
                        rectificar toda la información que se almacene o se recopile
                        en las bases de datos administradas por empresas privadas o
                        entidades públicas. Este derecho está contemplado en la Ley
                        1581 de 2012, conocida como el Régimen General de Protección
                        de Datos Personales, en el que, además, se señalan los
                        principios y obligaciones que tienen todos aquellos que
                        realicen el tratamiento de datos personales para garantizar
                        la protección del derecho fundamental de habeas data.
                      </p>
                      <ol style={{ listStyleType: "decimal" }}>
                        <li>
                          Efectuar las gestiones pertinentes para el desarrollo del
                          objeto social de la compañía en lo que tiene que ver con
                          el cumplimiento del objeto del contrato celebrado con el
                          Titular de la información.
                        </li>
                        <li>
                          Realizar invitaciones a eventos y ofrecer nuevos productos
                          y servicios.
                        </li>
                        <li>
                          Efectuar encuestas de satisfacción respecto de los bienes y
                          servicios ofrecidos por <strong>Compostify</strong>.
                        </li>
                        <li>
                          Suministrar información de contacto a la fuerza comercial
                          y/o red de distribución, telemercadeo, investigación de
                          mercados y cualquier tercero con el cual{" "}
                          <strong>Compostify</strong> tenga un vínculo contractual
                          para el desarrollo de actividades de ese tipo.
                        </li>
                        <li>
                          Contactar al Titular a través de medios telefónicos para
                          realizar encuestas, estudios y/o confirmación de datos
                          personales necesarios para la ejecución de una relación
                          contractual.
                        </li>
                        <li>
                          Contactar al Titular a través de medios electrónicos o chats para el envío de noticias relacionadas con campañas
                          de fidelización o mejora de servicio.
                        </li>
                      </ol>
                    </div>
                  )}
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
