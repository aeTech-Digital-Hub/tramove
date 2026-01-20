import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const shipperSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true
    },
    phone: {
        type: String, 
        required: true
    },
    company: {
        type: String, 
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    industry: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    },
    shipments: [{type: Schema.Types.ObjectId, ref: 'Quote'}],
    delivery: [{type: Schema.Types.ObjectId, ref: 'Transporter'}]
}, {timestamps: true})

shipperSchema.methods.createJWT = function (id) {
    return jwt.sign({userId: this._id, name: this.name}, process.env.JWT_SECRET)
}


shipperSchema.methods.comparePassword = function(shipperPassword){
    const isMatch = bcrypt.compare(shipperPassword, this.password)
    return isMatch;
}


const shipperModel = mongoose.models.Shipper || mongoose.model('Shipper', shipperSchema);

export default shipperModel