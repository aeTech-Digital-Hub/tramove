import adminModel from "../models/adminModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import HttpsError from "../models/errrorModel.js";
import validator from 'validator'


export const registerAdmin = async (req, res, next) => {
    const {email, password, name, phone} = req.body
    try {

        const exist = await adminModel.findOne({email})
        if(exist){
            return res.json({success: false, message: 'Shipper already exist'})
        }

        // if(!email){
        //     return next(new HttpsError('Unauthorized access, please provide valid credentials'))
        // } 
        

        if(!validator.isEmail(req.body.email)){
            return next(new HttpsError('Please provide a valid email'))
        }

        if(password.length < 8){
            return next(new HttpsError('Please provide a strong password'))
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        
        const newAdmin = new adminModel({
            name: name,
            email: email, 
            phone: phone,
            password: hashedPassword
            
        })
        
        const token = jwt.sign({userId: newAdmin._id, name: newAdmin.name}, process.env.JWT_SECRET)
        const admin = await newAdmin.save()
        return res.json({success: true, message: 'admin created', admin: {name: admin.name}, token})
    } catch (error) {
        console.log(error);
        return next(new HttpsError(error))
    }

}

export const loginAdmin = async(req, res, next) => {
    const {email, password} = req.body
    try {
        const admin = await adminModel.findOne({email})
        if(!admin){
            return next(new HttpsError('Unauthorized access, please provide valid credentials'))
        }

        const isMatch = bcrypt.compare(password, admin.password)
        if(!isMatch){
            return res.json({success: false, message: 'Invalid credentials'})
        }

        const token = jwt.sign({userId: admin._id}, process.env.JWT_SECRET)
        res.json({success: true, admin: {name: admin.name, id: admin._id}, token})
    } catch (error) {
        console.log(error);
        return next(new HttpsError(error))
        
    }
}


export const updateAdmin = async (req, res, next) => {
    const {id: adminId} = req.params
    const { email, name, phone } = req.body
    try {
        const admin = await adminModel.findByIdAndUpdate( adminId, {email, name, phone}, {new: true, runValidators: true})

        if(!admin){
            return res.status(404).json({message: `No admin with ${adminId}`})
        }
        res.statu(200).json(admin)
    } catch (error) {
        return next(new HttpsError(error))
    }
}



export const getAdmins = async(req, res, next) => {
    try {
        const admins = await adminModel.find()
        return res.json({success: true, admins})
    } catch (error) {
        return next(new HttpsError(error))
    }
}
