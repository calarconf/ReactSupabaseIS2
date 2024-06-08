import React, { useState, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import styles from './TaskForm.module.css'; // Importa el CSS modular

initMercadoPago('TEST-e8ce1bfa-9a01-4a62-b930-d2266a99ea11', {
    locale: 'es-CO',
});

function TaskForm() {
    const [taskName, setTaskName] = useState('');
    const [organicWasteAmount, setOrganicWasteAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [errors, setErrors] = useState({});
    const { createTask, adding } = useTasks();
    const [preferenceId, setPreferenceId] = useState(null);
    const [paymentApproved, setPaymentApproved] = useState(false); // Nuevo estado para controlar si el pago ha sido aprobado

    useEffect(() => {
        const calculatedPrice = (organicWasteAmount / 10) * 27500;
        setPrice(calculatedPrice);
        setPreferenceId(null); // Resetear preferenceId al cambiar la cantidad de desechos
    }, [organicWasteAmount]);

    const createPreference = async (price) => {
        try {
            const idempotencyKey = uuidv4();
            console.log(idempotencyKey);

            const response = await axios.post("http://localhost:3000/create_preference", {
                title: "Recolecta",
                quantity: 1,
                price: price, // Usa el precio calculado
            }, {
                headers: {
                    'X-Idempotency-Key': idempotencyKey,
                },
            });

            const { id } = response.data;
            return id;
        } catch (error) {
            console.error("Error creating preference:", error);
            alert("Hubo un error al crear la preferencia de pago. Por favor, inténtalo de nuevo.");
        }
    };

    const handleClick = async () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        const id = await createPreference(price);
        if (id) {
            setPreferenceId(id);
        }
    };

    const validate = () => {
        const errors = {};
        if (!taskName) {
            errors.taskName = 'La descripción no puede estar vacía';
        }
        if (organicWasteAmount <= 0) {
            errors.organicWasteAmount = 'La cantidad debe ser mayor a 0';
        } else if (organicWasteAmount > 40) {
            errors.organicWasteAmount = 'La cantidad debe ser menor o igual a 40';
        }
        return errors;
    };

    const handlePaymentSuccess = async () => {
        await createTask(taskName, organicWasteAmount, price);
        setTaskName('');
        setOrganicWasteAmount(0);
        setErrors({});
        setPreferenceId(null);
        setPaymentApproved(false);
    };

    useEffect(() => {
        if (preferenceId && paymentApproved) {
            setTimeout(() => {
                handlePaymentSuccess();
            }, 5000);
        }
    }, [preferenceId, paymentApproved]);

    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.card}>
            <input
                type="text"
                name="taskName"
                placeholder="Descripción de la recolecta"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
                className={styles['form-control']} // Usa las clases CSS importadas
            />
            {errors.taskName && <p className={styles.error}>{errors.taskName}</p>}
            <input
                type="number"
                name="organicWasteAmount"
                placeholder="Cantidad de desechos orgánicos"
                onChange={(e) => setOrganicWasteAmount(parseInt(e.target.value))}
                value={organicWasteAmount}
                className={styles['form-control']} // Usa las clases CSS importadas
            />
            {errors.organicWasteAmount && <p className={styles.error}>{errors.organicWasteAmount}</p>}
            <p className={styles.price}>Precio: {price} COP</p>
            <button onClick={handleClick} disabled={adding} className={styles.btn}>
                {adding ? 'Solicitando...' : 'Solicitar'}
            </button>
            {preferenceId && (
                <Wallet
                    initialization={{ preferenceId: preferenceId, redirectMode: 'blank' }}
                    onReady={() => console.log('Wallet ready')}
                    onError={(error) => console.error('Error in Wallet', error)}
                    onSubmit={() => setPaymentApproved(true)}
                    onEvent={({ type, data }) => {
                        setPaymentApproved(true); 
                    }}
                />
            )}
        </form>
    );
}


export default TaskForm;
