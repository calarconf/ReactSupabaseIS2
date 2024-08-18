import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../img/Log.png";
import "./CompostRequestStyle.css";
import Navbar from "../../pages/Navbar";

import TaskForm from '../TaskForm';
import TaskList from '../TaskList';

import compostBin from '../img/assets/compostBin.png';
import collector from '../img/assets/collector.png';

function CompostRequest() {
    const [showTaskDone, setShowTaskDone] = useState(false);


    return (
        <>
            <Navbar />

            <div className="compost-request-container">
                <div className="how-to">
                    <h1>Recuerda:</h1>
                    <div className="how-to-content">
                        <div className="how-to-text">
                            <div className="how-to-text-item">
                                <i class="fa-solid fa-leaf"></i>
                                <p1>Usa un contenedor resistente exclusivo para tus residuos orgánicos.
                                    Asegurate de que tenga una tapa para evitar malos olores.</p1>
                            </div>
                            <div className="how-to-text-item">
                                <i class="fa-solid fa-leaf"></i>
                                <p1>Puedes usar bolsas compostables para facilitar el traslado y mantener la limpieza.</p1>
                            </div>
                        </div>
                        <img className="image-content" alt="compostBin" src={compostBin} />
                    </div>
                    <div className="how-to-content">
                        <div className="how-to-text">
                            <div className="how-to-text-item">
                                <i class="fa-solid fa-leaf"></i>
                                <p1>Programe una recolección a través de nuestra página web.</p1>
                            </div>
                            <div className="how-to-text-item">
                                <i class="fa-solid fa-leaf"></i>
                                <p1>Coloca los residuos en un lugar accesible para nuestro equipo de recolección el día indicado.</p1>
                            </div>
                            <div className="how-to-text-item">
                                <i class="fa-solid fa-leaf"></i>
                                <p1>Asegúrate de que los residuos estén en un contenedor cerrado para facilitar su manejo.</p1>
                            </div>
                        </div>
                        <img className="image-content" alt="compostBin" src={collector} />
                    </div>
                    <div className="tables">
                        <table className="table-content">
                            <thead >
                                <tr>
                                    <th rowSpan={1} colSpan={2}>¿Qué puede ser composta?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Restos de frutas y verduras</td>
                                    <td>Cáscaras de huevo</td>
                                </tr>
                                <tr>
                                    <td>Borra de café y filtros de papel</td>
                                    <td>Bolsas de té (sin grapas)</td>
                                </tr>
                                <tr>
                                    <td>Restos de plantas y flores</td>
                                    <td>Pan viejo, cereales y granos</td>
                                </tr>
                                <tr>
                                    <td>Cáscaras de nueces (sin sal)</td>
                                    <td>Restos de frutas y vegetales frescos</td>
                                </tr>
                                <tr>
                                    <td>Césped cortado y hojas verdes</td>
                                    <td>Hojas secas y ramas pequeñas</td>
                                </tr>
                                <tr>
                                    <td>Cartón y papel sin tinta</td>
                                    <td>Aserrín y virutas de madera sin tratar</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table-content">
                            <thead >
                                <tr>
                                    <th style={{ background: "#a75644" }} rowSpan={1} colSpan={2}>¿Qué NO puede ser composta?</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Carnes y huesos</td>
                                    <td>Productos lácteos</td>
                                </tr>
                                <tr>
                                    <td>Grasas y aceites</td>
                                    <td>Excrementos de mascotas</td>
                                </tr>
                                <tr>
                                    <td>Plantas enfermas o con plagas</td>
                                    <td>Carbón o cenizas de carbón</td>
                                </tr>
                                <tr>
                                    <td>Restos de comida procesada</td>
                                    <td>Productos plásticos o de vidrio</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row pt-4">
                    <h1>Realiza tu solicitud de recolección aqui:</h1>
                    <div className='col-md-4 offset-md-4'>
                        <TaskForm />
                    </div>
                </div>
                <div className="separator"></div>

            </div >
        </>
    );
}

export default CompostRequest;