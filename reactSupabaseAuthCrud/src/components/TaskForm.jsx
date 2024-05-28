import React from 'react';
import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';



function TaskForm() {

    const [taskName, setTaskName] = useState('');
    const {createTask,adding} = useTasks();
    const [preferenceId, setPreferenceId] = useState(null);

    initMercadoPago('TEST-e8ce1bfa-9a01-4a62-b930-d2266a99ea11',{
        locale: 'es-CO',
    });

    const createPreference = async () => {
        try{
            const idempotencyKey = uuidv4();
            console.log(idempotencyKey)

            const response = await axios.post("http://localhost:3000/create_preference",{
                title: "Recolecta",
                quantity: 1,
                price: 10000,
            },{
                headers: {
                    'X-Idempotency-Key': idempotencyKey,
                },
            
            });
            
            const {id} = response.data;
            return id;
        }catch(error){
            console.log(error);
        }
    };
    const handleClick = async () => {
        const id = await createPreference();
        if (id){
            setPreferenceId(id);
        }
    };

    const handleSubmit = async e =>{
        e.preventDefault();
        createTask(taskName);
        setTaskName('');
    }
  return (
        <form onSubmit={handleSubmit} className='card card-body'>
            <input 
            type="text" 
            name="taskName" 
            placeholder="Descripción de la recolecta"
            onChange={(e) => setTaskName(e.target.value)}
            value={taskName}
            className='form-control mb-2'
            />
            <button disabled={adding} className='btn btn-primary btn-sm'>
                {adding ? 'Solicitando...' : 'Solicitar'}
            </button>
            <button onClick={handleClick}>Pagar</button>
            {preferenceId && <Wallet initialization={{ preferenceId: preferenceId, redirectMode :'blank' }} />}
            {/* <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} /> */}
        </form>
  )
}

export default TaskForm