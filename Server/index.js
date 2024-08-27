import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// SDK de mercado pago > npm i mercadopago express cors
import {MercadoPagoConfig, Preference} from 'mercadopago';

dotenv.config();

const client = new MercadoPagoConfig({
    accessToken: process.env.ACCESS_TOKEN,
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Soy el server');
});

app.post('/create_preference', async (req, res) => {
    try{
        const idempotencyKey = req.header['x-idempotency-key'];

        const body = {
            items : [
                {
                    title: req.body.title,
                    quantity: Number(req.body.quantity),
                    unit_price: Number(req.body.price),
                    currency_id: 'COP',
                },
            ],
            back_urls: {
                success: 'https://reactsupabaseis2-1.onrender.com/collect-record',
                failure: 'https://reactsupabaseis2-1.onrender.com/profile',
                pending: 'https://reactsupabaseis2-1.onrender.com',
            },
            auto_return: 'approved',
            notification_url: 'https://7912-186-29-103-79.ngrok-free.app/webhook',
        };
        const preference = new Preference(client);
        const result = await preference.create({body, idempotencyKey});

        res.json({
            id: result.id,
        });

    } catch (error){
        console.log(error);
        res.status(500).json({
            error: 'Error al crear la preferencia : ',
        });
    }
});
app.post('/webhook', async function (req, res){
    // const payment = req.query;
    const payment = req.body;
    console.log({payment});

    const paymentId = req.query.id;
    
    try{
        const response = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
            },
        });
        if(response.ok){
            const data = await response.json();
            console.log(data);
        }
        res.sendStatus(200);
        
    }catch (error){
        console.log('Error',error);
        res.sendStatus(500);
    }
    
    
})

app.listen(port, () => {
    console.log('Server corriendo en el puerto 3000');
    // console.log( process.env.ACCESS_TOKEN);
    
});    