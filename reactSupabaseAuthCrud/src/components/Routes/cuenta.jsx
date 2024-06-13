import Navbar from "../../pages/Navbar";
import './cuentaStyles.css';
import avatar from "../img/default-avatar.png";
import { Link } from 'react-router-dom';
import { ProfileTabsItems, profileConfigItems } from "./ProfileTabsItems";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from "../TaskList";

function Cuenta() {
    const [ProfileTabActiveTab, setProfileTabActive] = useState(1);
    const handleProfileTab = (index) => {
        if (ProfileTabActiveTab !== index) {
            setProfileTabActive(index);
        }
    };
    const [UserProfileSettingsActiveTab, setUserProfileSettingsActiveTab] = useState(0);
    const handleUserProfileSettings = (index) => {
        if (UserProfileSettingsActiveTab !== index) {
            setUserProfileSettingsActiveTab(index);
        }
    };
    const [showTaskDone, setShowTaskDone] = useState(false);


    return (
        <>
            <Navbar />
            <body className='cuenta-main-region'>
            </body >
            <div className='main-content'>
                <div className='user-profile-layout'>
                    <div className='profile-container'>
                        <div className='main-panel'>
                            <div className='avatar-panel'>
                                <div className='user-avatar own'>
                                    <Link className="avatar">
                                        <img src={avatar} alt="Logo" className="ig-avatar" ></img>
                                    </Link>
                                </div>

                                <div className="user-links">
                                    <div className='item title'>
                                        <span className="user-nickname placeholder-nickname">
                                            Compostify-User
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='separator'></div>
                        <ul className="user-profile-tabs" >

                            {ProfileTabsItems.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => handleProfileTab(index)}>
                                        <Link className={ProfileTabActiveTab === index ?
                                            item.cNameActive : item.cName} to={item.url}>
                                            <i className={item.icon}></i>
                                            {item.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="separator"></div>
                        <div className="user-profile-settings" >
                            <ul className={ProfileTabActiveTab === 1 ?
                                "collect-record-tabs active" : "collect-record-tabs"} >
                                <>
                                    <div className="compost-request-history">
                                        <div className="history-container pt-4">
                                            <header className='history-container-title justify-content-between my3'>
                                                <span className='h5'>
                                                    {showTaskDone ? 'Historial de recolectas' : 'Recolectas activas'}
                                                </span>
                                                <button className='history-container-title-bttn btn-dark btn-sm'
                                                    onClick={() => setShowTaskDone(!showTaskDone)}>
                                                    {showTaskDone ? 'Ver recolectas activas' : 'Ver historial de recolectas'}
                                                </button>
                                            </header>
                                            <div className='history-container-list offset-md-4'>
                                                <TaskList done={showTaskDone} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </ul>

                            <ul className={ProfileTabActiveTab === 2 ?
                                "user-profile-settings-tabs active" : "user-profile-settings-tabs"} >
                                {
                                    profileConfigItems.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => handleUserProfileSettings(index)}>
                                                <Link className={UserProfileSettingsActiveTab === index
                                                    ? item.cNameActive : item.cName} to={item.url}>
                                                    <i className={item.icon}></i>
                                                    <div className="lines">
                                                        <span className="title">{item.title}</span>
                                                        <span>{item.content}</span>
                                                    </div>
                                                    <div className="fa-solid fa-chevron-right"></div>
                                                </Link>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <div className="separator"></div>
                            <div className="settings-content">
                                <div className="tab-content-settings">
                                    <div className={UserProfileSettingsActiveTab === 0 && ProfileTabActiveTab === 2 ?
                                        "register-FAQ active" : "register-FAQ"}>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>1. ¿Cómo me registro en la página?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Para registrarte, haz clic en el botó "Registrarse" en la esquina superior derecha
                                                    de la página de inicio. Luego, completa el formulario con tu correo electrónico.
                                                    Recibirás un correo de confirmación para activar tu cuenta.</p1>
                                            </div>
                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>2. ¿Puedo tener más de una cuenta?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Recomendamos tener solo una cuenta por persona para facilitar la gestión de tus servicios
                                                    y recompensas. Sin embargo, si es posible tener mas de na cuenta registrada.</p1>
                                            </div>
                                        </div>
                                    </div>


                                    <div className={UserProfileSettingsActiveTab === 1 && ProfileTabActiveTab === 2 ?
                                        "collect-service-FAQ active" : "collect-service-FAQ"}>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>1. ¿Cómo solicito un servicio de recolección?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Después de registrarte e iniciar sesión, ve a la sección "Solicitar Recolección". Selecciona
                                                    la cantidad, la dirección de recolección y la fecha de recolección deseada. Confirma
                                                    los detalles y espera la confirmación de nuestro equipo.</p1>
                                            </div>

                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>2. ¿Cuáles son los horarios de recolección?
                                                </h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Nuestros horarios de recolección son de lunes a viernes, de 8:00 AM a 6:00 PM.</p1>
                                            </div>
                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>3. ¿Qué tipos de residuos orgánicos aceptan?
                                                </h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Aceptamos residuos de frutas y verduras, restos de café, cáscaras de huevo, restos
                                                    de plantas y flores, y otros residuos orgánicos similares. No aceptamos residuos de carne,
                                                    lácteos, aceites o productos tratados químicamente.</p1>
                                            </div>
                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>4. ¿Cómo sé cuándo llegarán a recoger mis residuos?
                                                </h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Te enviaremos un correo electrónico y una notificación en tu cuenta con la fecha y hora estimada de recolección. También puedes verificar el estado de tu solicitud en la sección "Historial de recolecciones/recolecciones activas".</p1>
                                            </div>
                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>5. ¿Qué debo hacer si mi recolección no fue realizada?
                                                </h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Si tu recolección no fue realizada, por favor contacta a nuestro soporte al cliente a través de la sección "Contactanos" en el pie de página. Revisaremos tu caso y programaremos una nueva recolección lo antes posible.</p1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={UserProfileSettingsActiveTab === 2 && ProfileTabActiveTab === 2 ?
                                        "info-FAQ active" : "info-FAQ"}>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>1. ¿Qué residuos orgánicos aceptan?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Aceptamos residuos de frutas y verduras, restos de café, cáscaras de huevo, restos de plantas y flores, y otros residuos orgánicos similares. No aceptamos residuos de carne, lácteos, aceites o productos tratados químicamente.Para mas información revisa la pagina de "solicitar recolección".</p1>
                                            </div>
                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>2. ¿Cómo debo preparar mis residuos para la recolección?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Para preparar tus residuos, colócalos en una bolsa o contenedor biodegradable. Asegúrate de que los residuos no contengan materiales no orgánicos como plásticos, metales o vidrio.</p1>
                                            </div>
                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>3. ¿Con qué frecuencia se realiza la recolección?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Actualmente no contamos con un servicio de recolección periódico. Puedes solicitar una recolección unica cada vez que lo necesites.</p1>
                                            </div>
                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>4. ¿Qué sucede con los residuos después de la recolección?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Después de la recolección, los residuos son transportados a unas instalaciones especializadas donde son procesados y convertidos en composta. Este proceso es completamente ecológico y ayuda a reducir la cantidad de residuos en los vertederos.</p1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={UserProfileSettingsActiveTab === 3 && ProfileTabActiveTab === 2 ?
                                        "payment-FAQ active" : "payment-FAQ"}>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>1. ¿Qué métodos de pago aceptan?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Usamos el API de Mercado Pago, el cual acepta pagos dela cuenta de mercado pago, nequi, tarjeta (Crédito, Visa Débito o MasterCard Debito), Efecty o PSE.</p1>
                                            </div>
                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>2. ¿Ofrecen planes de suscripción?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Actualmente no, sin embargo se enceuntra dentro de los planes a futuro de Compostify.</p1>
                                            </div>
                                        </div>
                                        <div className="tab-content-point">
                                            <div className="tab-content-question">
                                                <h1>3.  ¿Qué hago si tengo un cargo incorrecto en mi cuenta?</h1>
                                            </div>
                                            <div className="tab-content-ans">
                                                <p1>Si ves un cargo incorrecto en tu cuenta, por favor contacta a nuestro equipo de soporte a través de la sección "Contacto". Investigaremos el problema y te proporcionaremos una solución adecuada.</p1>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Cuenta;