import express from 'express';
import Customer from '../Model/customer.js';
import Shipping from '../Model/shipping.js';

const route = express.Router();

route.post('/delivery', (req, res) => {
    // Write your route logic here

    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Request body is missing');
        }
        // console.log(req);
        const { cName, state, cAddress, cPhoneNumber, item, unit } = req.body;

        const data = new Shipping({
            cName,
            cAddress,
            cPhoneNumber,
            state,
            item,
            unit
        });

        console.log(data);

        data.save();
        // console.log(data);
        return res.status(200).json({
            msg: 'success',
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: error,
        });
    }
});

route.post('/add-business', (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send('Bad Request: Request body is missing');
        }
        // console.log(req);
        const { name, businessName, businessAddress, phoneNumber } = req.body;

        const data = new Customer({
            name,
            businessName,
            businessAddress,
            phoneNumber
        });

        data.save();
        console.log(data);
        return res.status(200).json({
            msg: 'success',
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            msg: error,
        });
    }
});

export default route;
