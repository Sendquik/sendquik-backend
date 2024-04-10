// models/customer.js
import mongoose from 'mongoose';

// Define schema for the customer model
const shippingSchema = new mongoose.Schema({
    cName: {
        type: String,
        required: true
    },
    cAddress: {
        type: String,
        required: true
    },
    cPhoneNumber: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    unit: {
        type: Number,
        required: true
    }
});

// Create the Customer model from the schema
const Shipping = mongoose.model('Shipping', shippingSchema);

export default Shipping;
