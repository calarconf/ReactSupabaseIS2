import React from "react";
import "./footerStyles.css";
import { Link } from "react-router-dom";
import logo from "../components/img/Log.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <img src={logo} alt="Logo" />
                    <div>
                        <h1>Compostify</h1>
                        <p>Juntos hacia una tierra más fértil.</p>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div></div>
                <div></div>
                <div className="proyect-settings">
                    <div className="footer-columns">
                        <div>
                            <h1>GitHub: </h1>
                            <div className="social-links">
                                <Link to="https://github.com/calarconf/ReactSupabaseIS2/tree/main" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-square-github"></i>
                                </Link>
                            </div></div>

                    </div>
                </div>
                <div className="our-socials">
                    <div className="footer-columns">
                        <div>
                            <h1>Nuestras Redes: </h1>
                            <div className="social-links">
                                <Link to="https://www.instagram.com/compostify_col/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-square-instagram"></i>
                                </Link>
                                <Link to="https://www.facebook.com/profile.php?id=61560271725752" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-brands fa-square-facebook"></i>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h1>Contáctanos: </h1>
                            <div className="mails">
                                <Link to="mailto:calarconf@unal.edu.co" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <p1>Cristhian Alarcón</p1>
                                </Link>
                                <Link to="mailto:fmurciam@unal.edu.co" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <p1>Fabio Murcia</p1>
                                </Link>
                                <Link to="mailto:saparadaa@unal.edu.co" target="_blank" rel="noopener noreferrer">
                                    <i class="fa-solid fa-chevron-right"></i>
                                    <p1>Sergio Parada</p1>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;