import React from 'react';
import './TermsAndConditions.css';
import logo from "../components/img/Log.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useState } from "react";



const AcceptButton = ({ setTermsAccepted }) => {
    const navigate = useNavigate();

    const handleAccept = () => {
        setTermsAccepted(true);
        navigate('/login');
    };

    return (
        <button className="accept-button" onClick={handleAccept}>Aceptar</button>
    );
};
const RejectButton = ({ setTermsAccepted }) => {
    const navigate = useNavigate();

    const handleAccept = () => {
        setTermsAccepted(true);
        navigate('/');
    };

    return (
        <button className="accept-button" onClick={handleAccept}>Rechazar</button>
    );
};
function TermsAndConditions() {
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [termsRejected, settermsRejected] = useState(false);

    return (
        <div className="container">
            <div className='part-nabvar'>
                <nav className="NavbarItems">
                    <Link className="nav-link-logo" to="/">
                        <div className="logoContainer">
                            <img src={logo} alt="Logo" />
                            <h1 className="navbar-logo" >Compostify</h1>
                        </div>
                    </Link>
                </nav>
            </div>

            <div className="terms-conditions">
                <h1>Términos y Condiciones y Política de Privacidad</h1>

                <h2>Términos y Condiciones</h2>
                <p>Al utilizar nuestros servicios de recolección, aceptas los siguientes términos y condiciones:</p>
                <ol>
                    <li><strong>Descripción del Servicio</strong>:
                        <ul>
                            <li>Nuestro servicio de recolección permite a los usuarios solicitar la recolección de materiales específicos a través de nuestra plataforma.</li>
                        </ul>
                    </li>
                    <li><strong>Requisitos del Usuario</strong>:
                        <ul>
                            <li>Los usuarios deben proporcionar una descripción precisa y detallada de los materiales a recolectar.</li>
                            <li>Los usuarios deben aceptar los términos y condiciones, así como nuestra política de privacidad, antes de enviar una solicitud.</li>
                        </ul>
                    </li>
                    <li><strong>Pagos y Facturación</strong>:
                        <ul>
                            <li>Utilizamos Mercado Pago para procesar los pagos de las recolectas.</li>
                            <li>Al aceptar estos términos, también aceptas las políticas de privacidad de Mercado Pago.</li>
                        </ul>
                    </li>
                    <li><strong>Responsabilidades del Usuario</strong>:
                        <ul>
                            <li>Proveer información veraz y actualizada.</li>
                            <li>Cumplir con las normativas locales en cuanto a la disposición y manejo de materiales.</li>
                        </ul>
                    </li>
                    <li><strong>Modificaciones del Servicio</strong>:
                        <ul>
                            <li>Nos reservamos el derecho de modificar o discontinuar el servicio en cualquier momento sin previo aviso.</li>
                        </ul>
                    </li>
                </ol>

                <h2>Política de Privacidad</h2>
                <p>Nuestra política de privacidad está diseñada para informar a los usuarios sobre cómo recopilamos, usamos y protegemos su información personal.</p>

                <h3>Uso de Datos Personales</h3>
                <ol>
                    <li><strong>Finalidad de los Datos</strong>:
                        <ul>
                            <li>Los datos personales recopilados serán utilizados para gestionar y procesar las solicitudes de recolección, así como para fines administrativos y de facturación.</li>
                        </ul>
                    </li>
                    <li><strong>Uso de Mercado Pago</strong>:
                        <ul>
                            <li>Para procesar los pagos de las recolectas, utilizamos los servicios de Mercado Pago. Al aceptar estos términos, consientes que tus datos personales sean compartidos con Mercado Pago para procesar los pagos necesarios.</li>
                        </ul>
                    </li>
                </ol>

                <h3>Derechos de los Titulares de los Datos</h3>
                <p>De acuerdo con la ley de protección de datos de la República de Colombia, tienes los siguientes derechos:</p>
                <ol>
                    <li><strong>Derecho de Acceso y Rectificación</strong>:
                        <ul>
                            <li>Conocer y acceder a tus datos personales de manera gratuita; actualizarlos y rectificarlos si están incompletos, incorrectos, parciales o si su uso está prohibido o no has dado tu autorización.</li>
                        </ul>
                    </li>
                    <li><strong>Prueba de Autorización</strong>:
                        <ul>
                            <li>Solicitar prueba de la autorización que como usuario nos diste, salvo cuando expresamente se exceptúe como requisito para el tratamiento.</li>
                        </ul>
                    </li>
                    <li><strong>Información sobre el Uso de Datos</strong>:
                        <ul>
                            <li>Ser informado acerca del uso que se le ha dado a tus datos personales.</li>
                        </ul>
                    </li>
                    <li><strong>Retiro de Autorización y Eliminación de Datos</strong>:
                        <ul>
                            <li>Retirar tu autorización para el uso de tus datos o pedir que sean eliminados cuando consideras que no se respetan tus derechos y garantías constitucionales y legales, siempre que la Superintendencia de Industria y Comercio haya determinado que se realizaron conductas contrarias a la ley y a la Constitución.</li>
                        </ul>
                    </li>
                    <li><strong>Presentación de Quejas</strong>:
                        <ul>
                            <li>Presentar quejas ante la Superintendencia de Industria y Comercio por incumplimiento de la normatividad colombiana de protección de datos.</li>
                        </ul>
                    </li>
                </ol>

                <h3>Procedimientos para Ejercer tus Derechos</h3>
                <ol>
                    <li><strong>Consulta y Reclamo</strong>:
                        <ul>
                            <li>Puedes realizar consultas y/o ejercer tus derechos de acceso, rectificación y supresión de tu información personal por correo postal a la dirección: Carrera 17 No. 93-09, Piso 3, Bogotá D.C., República de Colombia. Atte.: Mercado Libre Colombia LTDA.</li>
                            <li>En caso de hacer falta algo en tu solicitud, te pediremos que lo completes en un plazo de 5 días.</li>
                            <li>Tu reclamo será atendido por nuestro equipo especializado en un plazo máximo de 15 días, con posibilidad de extenderse 8 días adicionales si fuera necesario.</li>
                        </ul>
                    </li>
                </ol>

                <h3>Almacenamiento de Datos</h3>
                <ol>
                    <li><strong>Periodo de Conservación</strong>:
                        <ul>
                            <li>Después de finalizada la relación, conservaremos tus datos personales por un término de 10 años, conforme la legislación colombiana.</li>
                        </ul>
                    </li>
                </ol>

                <h3>Ley Aplicable y Jurisdicción</h3>
                <ol>
                    <li><strong>Legislación</strong>:
                        <ul>
                            <li>Las Políticas de Privacidad se regirán por las leyes de la República de Colombia.</li>
                        </ul>
                    </li>
                    <li><strong>Jurisdicción</strong>:
                        <ul>
                            <li>Ante cualquier problema o desacuerdo relacionado con la interpretación, validez o cumplimiento de este documento, tú y Mercado Libre declaran que se someten a la jurisdicción exclusiva de los Tribunales competentes de la Ciudad de Bogotá.</li>
                        </ul>
                    </li>
                </ol>

                <h3>Autoridad de Aplicación</h3>
                <ol>
                    <li><strong>Delegatura para la Protección de Datos Personales</strong>:
                        <ul>
                            <li>La autoridad de aplicación en la República de Colombia en materia de protección de datos personales es la Delegatura para la Protección de Datos Personales de la Superintendencia de Industria y Comercio, y las normas aplicables son la Ley 1581 de 2012, el Decreto 1377 de 2013 y otras normas aplicables.</li>
                        </ul>
                    </li>
                </ol>

                <p>Estos términos y condiciones, junto con nuestra política de privacidad, están diseñados para proteger tus derechos y garantizar la transparencia en el uso de tus datos personales. Si tienes alguna pregunta o inquietud, no dudes en contactarnos.</p>

                <div className="button-container">
                    <AcceptButton setTermsAccepted={setTermsAccepted} />
                    <RejectButton setTermsAccepted={setTermsAccepted} />
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;
