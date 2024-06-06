import compostarImg from '../img/assets/1.jpg';
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
            <div className="why-compost">
                <h1 className="title-why">¿Por qué recoger residuos orgánicos?</h1>
            </div>

        </>
    )
}

export default Compostar;