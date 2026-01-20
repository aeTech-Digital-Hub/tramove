import mongoose, { Schema } from 'mongoose'

const adminSchema = new mongoose.Schema({
    email: {type: String, enum: {
        values: ['sharafabdalla@outlook.com', 'Ayman.amodi911@gmail.com', 'sharaf19.tech@gmail.com'], 
        message: "Please login in with your admin submitted email and set a password"
    }, required: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    phone: {type: String, required: true}
})


export default mongoose.model('Admin', adminSchema)