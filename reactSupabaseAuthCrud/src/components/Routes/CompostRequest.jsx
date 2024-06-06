import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from "../img/Log.png";
import "./CompostRequestStyle.css";
import Navbar from "../../pages/Navbar";

import TaskForm from '../TaskForm';
import TaskList from '../TaskList';

function CompostRequest() {
    const [showTaskDone, setShowTaskDone] = useState(false);
    // const [formData, setFormData] = useState({
    //     quality: '',
    //     amount: '',
    //     type: '',
    //     destiny: '',
    //     idUser_id: ''
    // });
    // const [price, setPrice] = useState('');

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });

    //     if (name === 'amount') {
    //         const amount = parseFloat(value);
    //         const calculatedPrice = amount / 20 * 55000;
    //         setPrice(calculatedPrice.toFixed(2));
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     // Verificar si el valor de amount es negativo
    //     if (formData.amount < 0) {
    //         alert('El valor de litros no puede ser negativo');
    //         return; // Detener el envío de la solicitud
    //     }

    //     const dataToSend = {
    //         ...formData,
    //         price: price
    //     };

    //     try {
    //         const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/recolecta`, dataToSend);
    //         console.log(response.data);
    //         alert('¡La solicitud se envió correctamente!');
    //         window.location.href = "/";
    //     } catch (error) {
    //         console.error('Error adding recolecta:', error);
    //     }
    // };


    return (
        <>
            <Navbar />
            <div className="compost-request-container">
                <div className="row pt-4">
                    <div className='col-md-4 offset-md-4'>
                        <TaskForm />
                        {/* <header className='d-flex justify-content-between my3'>
                            <span className='h5'>
                                {showTaskDone ? 'Historial de recolectas' : 'Recolectas activas'}
                            </span>
                            <button className='btn btn-dark btn-sm'
                                onClick={() => setShowTaskDone(!showTaskDone)}>
                                {showTaskDone ? 'Ver recolectas activas' : 'Ver historial de recolectas'}
                            </button>
                        </header>
                        <TaskList done={showTaskDone} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CompostRequest;