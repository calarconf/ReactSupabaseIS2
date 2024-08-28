import Navbar from "../../pages/Navbar";
import Hero from '../../pages/Hero';
import nosotrosImg from "../img/assets/9.jpg";
import visionImg from "../img/assets/4.jpg";
import visionIm from "../img/assets/3.jpg";
import sergio from "../img/assets/sergio.jpg";
import christian from "../img/assets/christian.jpg";
import fabio from "../img/assets/fabio.jpg";
import './nosotrosStyles.css';



function Nosotros() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={nosotrosImg}
                title="Nosotros"
                paragraph="Conoce al equipo de Compostify"
            />
            <div className="full-container">
                <h2 className='catchphrase'>"Juntos hacia una Tierra mas fertil"</h2>
                <div className="separator"></div>
                <div className="vision">
                    <div className="textContent">
                        <h1 className='title'>Nuestra visión</h1>
                        <p className='text'>Para el 2027, Compostify será la plataforma líder en Bogotá donde familias y
                            empresas puedan solicitar la recolección de sus
                            residuos orgánicos por parte de la planta de compostaje de Sinambore*.</p>
                        <div className="separator"></div>
                        <h1 className='title'>Nuestra misión</h1>
                        <p className='text'>Facilitar la conexión entre generadores de residuos orgánicos,
                            tales como familias y empresas, con la planta de compostaje de Sinambore*, gestionando el enlace de los involucrados a través de una plataforma digital innovadora. Nuestro compromiso es optimizar este proceso para
                            promover prácticas sostenibles y contribuir a la creación de un entorno más limpio y ecológico.</p>
                    </div>
                    <img className="image" alt="VisionImg" src={visionImg} />
                    <img className="imageRes" alt="VisionIm" src={visionIm} />
                </div>
                <div className="separator"></div>
                <h2 className='Ustitle'>Nuestro equipo</h2>

                <div className="Uscontent">
                    {/* christian   */}
                    <div className="column">
                        <div className="card">
                            <img className="teamImg" src={christian} alt="christianImg" />
                            <div className="person-container">
                                <h2>Cristhian Alejandro Alarcón Florido</h2>
                                <p className="title">Product Owner/Programmer</p>
                                <p>Front-end Programmer</p>
                                <p>calarconf@unal.edu.co</p>
                            </div>
                        </div>
                    </div>
                    {/*fabio */}
                    <div className="column">
                        <div className="card">
                            <img className="teamImg" src={fabio} alt="fabioImg" />
                            <div className="person-container">
                                <h2>Fabio Esteban Murcia Martínez</h2>
                                <p className="title">Programmer</p>
                                <p>Database Programmer</p>
                                <p>fmurciam@unal.edu.co</p>
                            </div>
                        </div>
                    </div>
                    {/* sergio */}
                    <div className="column">
                        <div className="card">
                            <img className="teamImg" src={sergio} alt="sergioImg" />
                            <div className="person-container">
                                <h2>Sergio Alexander Parada Amarillo</h2>
                                <p className="title">Programmer</p>
                                <p>Front-end Designer & Programmer</p>
                                <p>saparadaa@unal.edu.co</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="disclaimer" style={{ display: "flex", marginLeft: "50%" }} >
                    <p1 style={{ color: "white", fontSize: "1rem", textAlign: "end" }}>*La conexión con la planta de repostaje bore aún se encuentra en proceso
                    </p1>Sinam
                </div>
            </div>

        </>
    )
}

export default Nosotros;