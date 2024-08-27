import compostarImg from '../img/assets/1.jpg';
import png1 from '../img/assets/png1.png';
import png2 from '../img/assets/png2.png';
import leaves from "../img/assets/leaves.png";
import Navbar from "../../pages/Navbar";
import Hero from '../../pages/Hero';
import './compostarStyles.css';

function Compostar() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg={compostarImg}
                title="¡Únete a la Revolución Verde!"
                paragraph="Juntos hacia una Tierra mas fertil"
                url="/compost-request"
                bttnClass="collection-request"
                buttonText="Solicitar recolección"
            />
            <div className="container">
                <div className="who-compost">
                    <h1>¿Qué es Compostify?</h1>
                    <p1>Conectamos familias y empresas que buscan disminuir su
                        huella de carbono con transformadores de composta.</p1>
                    <p1>Facilitamos la comunicación eficiente entre generadores de residuos
                        orgánicos, como familias y empresas, y la planta de compostaje de Sinambore* a
                        través de nuestra plataforma digital. Únete a
                        nuestra comunidad comprometida con el cambio ambiental
                        y comienza a transformar tus residuos en recursos hoy mismo.</p1></div>
                <div className='what-compost'>
                    <img className="image-content" alt="png1" src={png1} />
                    <div className="content">
                        <h1>¿Qué es el compostaje?</h1>
                        <p1>La composta es un abono natural hecho de residuos orgánicos como restos de alimentos
                            y hojas secas. Reciclando estos desechos, mejoramos la fertilidad del suelo y promovemos
                            el crecimiento de plantas. Únete a nosotros para convertir residuos en composta y cuidar
                            el medio ambiente.
                        </p1>
                    </div>
                    <img src={leaves} alt="leaves" className="res-image" />
                </div>

                <div className="why-compost">
                    <img src={leaves} alt="leaves" className="res-image" />
                    <div className="content">
                        <h1>¿Por qué recoger residuos orgánicos?</h1>
                        <p1>Compostar en Colombia es genial: reduce la basura, mejora el aire y fortalece los cultivos.
                            También ahorra dinero, crea empleos y une a las comunidades. Con nuestros diversos climas
                            y suelos, el compostaje es una práctica natural y sostenible que se adapta perfectamente a
                            nuestra cultura agrícola. ¡Únete al movimiento del compostaje hoy mismo!
                        </p1>
                    </div>
                    <img className="image-content" alt="png2" src={png2} />
                </div>
                <div className="disclaimer" style={{ display: "flex", marginLeft: "50%" }} >
                    <p1 style={{ color: "white", fontSize: "1rem", textAlign: "end" }}>*La conexión con la planta de repostaje Sinambore aún se encuentra en proceso
                    </p1>
                </div>
            </div >
        </>
    )
}

export default Compostar;