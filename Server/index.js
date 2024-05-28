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
                success: 'https://www.youtube.com/@cristhianalarcon5721',
                failure: 'https://www.youtube.com/@cristhianalarcon5721',
                pending: 'https://www.youtube.com/@cristhianalarcon5721',
            },
            auto_return: 'approved',
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

app.listen(port, () => {
    console.log('Server corriendo en el puerto 3000');
    // console.log( process.env.ACCESS_TOKEN);
    
});    