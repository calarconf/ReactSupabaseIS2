import React, { useState, useEffect } from 'react';
import { useTasks } from '../context/TaskContext';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { GoogleMap, LoadScript, Autocomplete, Marker } from '@react-google-maps/api';
import styles from './TaskForm.module.css'; // Importa el CSS modular

initMercadoPago('APP_USR-a6036e51-cadc-4f55-8d5b-ed7cd5d54a6a', {
    locale: 'es-CO',
});

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
    lat: 4.7124857902526855, 
    lng: -74.0717468261718
};

const libraries = ['places'];

function TaskForm() {
    const [taskName, setTaskName] = useState('');
    const [organicWasteAmount, setOrganicWasteAmount] = useState("");
    const [price, setPrice] = useState(0); 
    const [errors, setErrors] = useState({});
    const { createTask, adding } = useTasks();
    const [preferenceId, setPreferenceId] = useState(null);
    const [address, setAddress] = useState('');
    const [autocomplete, setAutocomplete] = useState(null);
    const [markerPosition, setMarkerPosition] = useState(center);

    useEffect(() => {
        const calculatedPrice = (organicWasteAmount / 10) * 27500;
    
        // // Formateamos el precio solo para la visualización, sin necesidad de parseFloat
        // const formattedPrice = calculatedPrice.toLocaleString('es-CO', {
        //     minimumFractionDigits: 2,
        //     maximumFractionDigits: 2,
        // });
    
        setPrice(calculatedPrice);  
        setPreferenceId(null);
    }, [organicWasteAmount]);
    
    const createPreference = async (price) => {
        try {
            const idempotencyKey = uuidv4();
            console.log(idempotencyKey);

            const response = await axios.post("https://compostify.onrender.com/create_preference", {
                title: "Recolecta",
                quantity: 1,
                price: price, 
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
            // Simula un retraso de 3 segundos antes de llamar a createTask
            setTimeout(async () => {
                await createTask(taskName, organicWasteAmount, price);
                setTaskName('');
                setOrganicWasteAmount(0);
                setErrors({});
                setPreferenceId(null);
                alert('Recolecta creada con éxito');
            }, 9000);
        }
    };
    
    

    const validate = () => {
        const errors = {};
        if (!taskName) {
            errors.taskName = 'La dirección no puede estar vacía';
        }
        if (organicWasteAmount <= 2) {
            errors.organicWasteAmount = 'La cantidad debe ser mayor a 3kg';
        } else if (organicWasteAmount > 30) {
            errors.organicWasteAmount = 'La cantidad debe ser menor o igual a 30Kg';
        }
        return errors;
    };

    const setPaymentApproved = async () => {
        await createTask(taskName, organicWasteAmount, price);
        setTaskName('');
        setOrganicWasteAmount(0);
        setErrors({});
        setPreferenceId(null);
        alert('Pago realizado con éxito');
    };

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        if (autocomplete !== null) {
            const place = autocomplete.getPlace();
            const location = place.geometry.location;
            setMarkerPosition({ lat: location.lat(), lng: location.lng() });
            setAddress(place.formatted_address);
            setTaskName(place.formatted_address); 
            console.log(place.formatted_address);
        } else {
            console.log('Autocomplete is not loaded yet!');
        }
    };

    const handleMapClick = async (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setMarkerPosition({ lat, lng });

        const geocodeResponse = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyAQj03uZc_sWxZuvoBrzDhoR_xQpxCVkuo`
        );
        if (geocodeResponse.data.results.length > 0) {
            const formattedAddress = geocodeResponse.data.results[0].formatted_address;
            setAddress(formattedAddress);
            setTaskName(formattedAddress);
        }
    };

    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.card}>
            <input
                type="text"
                name="taskName"
                placeholder="Dirección"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
                className={styles['form-control']} 
            />
            {errors.taskName && <p className={styles.error}>{errors.taskName}</p>}
            <input
                type="number"
                name="organicWasteAmount"
                placeholder="Cantidad de desechos orgánicos"
                onChange={(e) => setOrganicWasteAmount(parseInt(e.target.value))}
                value={organicWasteAmount}
                className={styles['form-control']} 
            />
            {errors.organicWasteAmount && <p className={styles.error}>{errors.organicWasteAmount}</p>}
            <p className={styles.price}>Precio: {price} COP</p>
            <LoadScript
                googleMapsApiKey="AIzaSyAQj03uZc_sWxZuvoBrzDhoR_xQpxCVkuo"
                libraries={libraries}
            >
                <Autocomplete
                    onLoad={onLoad}
                    onPlaceChanged={onPlaceChanged}
                >
                    <input
                        type="text"
                        placeholder="Enter a location"
                        style={{
                            boxSizing: `border-box`,
                            border: `1px solid transparent`,
                            width: `240px`,
                            height: `32px`,
                            padding: `0 12px`,
                            borderRadius: `3px`,
                            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                            fontSize: `14px`,
                            outline: `none`,
                            textOverflow: `ellipses`,
                            position: "absolute",
                            left: "50%",
                            marginLeft: "-120px"
                        }}
                    />
                </Autocomplete>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={markerPosition}
                    zoom={15}
                    onClick={handleMapClick}
                >
                    <Marker position={markerPosition} />
                </GoogleMap>
            </LoadScript>
            <button onClick={handleClick} disabled={adding} className={styles.btn}>
                {adding ? 'Solicitando...' : 'Solicitar'}
            </button>
            {preferenceId && (
                <Wallet
                    initialization={{ preferenceId: preferenceId, redirectMode: 'blank' }}
                    onReady={() => console.log('Wallet ready')}
                    onError={(error) => console.error('Error in Wallet', error)}
                    onEvent={({ type, data }) => {
                        if (type === 'payment_approved') {
                            handlePaymentApproved();
                        }
                    }}
                />
            )}
        </form>
    );
}

export default TaskForm;
