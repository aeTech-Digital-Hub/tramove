import mongoose, { Schema } from 'mongoose'

const getQuoteSchema = new mongoose.Schema({
    weight: {type: Number, required: true},
    dimensions: {type: String, required: true},
    origin: {type: String, required: true},
    destination: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    name: {type: String, required: true},
    createdBy: {
        type: Schema.Types.ObjectId, 
        ref: 'Shipper',
    },
    goods: {
        type: String, enum: {
            values: ['electronics', 'others', 'furniture', 'clothing']
        }
    },
    creator: {type: Schema.Types.ObjectId, ref: 'Shipper'},
    message: {type: String, default: 'New Shippment'},
    status: {
        type: String,
        enum: {
            values: ['processing', 'pending', 'delivered']
        },
        default: 'pending'
    },
    amount: {type: String, default: '0'}

}, {timestamps: true})

export default mongoose.model('Quote', getQuoteSchema)