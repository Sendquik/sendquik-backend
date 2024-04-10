// models/customer.js
import mongoose from 'mongoose';

// Define schema for the customer model
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        required: true
    },
    businessAddress: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
});

// Create the Customer model from the schema
const Customer = mongoose.model('Customer', customerSchema);

export default Customer
