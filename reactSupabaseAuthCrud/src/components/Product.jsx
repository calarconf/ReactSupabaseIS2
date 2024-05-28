
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import axios from 'axios';
import { useState } from "react";

const Product = () => {
    const [preferenceId, setPreferenceId] = useState(null);
    initMercadoPago('TEST-e8ce1bfa-9a01-4a62-b930-d2266a99ea11',{
        locale: 'es-CO',
    });
    const createPreference = async () => {
        try{
            const response = await axios.post("http://localhost:3000/create_preference",{
                title: "Recolecta",
                quantity: 1,
                price: 1000,
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

    return (
    <div className="card-product-container">
        <div className="card-product">
            <div className="card-product-image">
                <img src="https://via.placeholder.com/150" 
                alt="product" />
                <h3> Recolecta</h3>
                <p className="price"> 1000 $</p>
                <button onClick={handleClick}>Pagar</button>
                {preferenceId && <Wallet initialization={{ preferenceId: preferenceId }} />}
                {/* <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts:{ valueProp: 'smart_option'}}} /> */}
            </div>
        </div>
    </div>

  )
}

export default Product