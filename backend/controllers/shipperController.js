import shipperModel from "../models/shipperModel.js";
import Quote from '../models/getQuoteModel.js'
import validator from 'validator'
import bcrypt from 'bcrypt'
import getQuoteModel from "../models/getQuoteModel.js";
import HttpsError from "../models/errrorModel.js";

export const registerShipper = async (req, res) => {
    const { email, name, password, company, address, industry, phone} = req.body;

    try {
        const exist = await shipperModel.findById()
        if(exist){
            return res.json({success: false, message: 'Shipper already exist'})
        }

        if(!validator.isEmail(req.body.email)){
            return res.json({success: false, message: 'Please enter a valid email'})
        }

        if(password.length < 8){
            return res.json({success: false, message: 'Please provide a strong password'})
        }


        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newShipper = new shipperModel({
            name: name,
            email: email, 
            password: hashedPassword, 
            company: company,
            address: address,
            industry: industry,
            phone: phone
        })

        const shipper = await newShipper.save()
        const token = shipper.createJWT(shipper._id)
        res.json({success: true, message: 'shipper created', shipper:{name: shipper.name}, Quote, token})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'error'})
    }
}

export const loginShipper = async (req, res) => {

    const {id} = req.params
    const { email, password } = req.body;
    try {
        const quote = await getQuoteModel.findById(id)
        const shipper = await shipperModel.findOne({email})
        if(!shipper){
            return res.json({success: false, message: 'Shipper does not exist'})
        }

        const isCorrectPassword = await shipper.comparePassword(password)
        if(!isCorrectPassword){
            return res.json({success: false, message: 'Invalid credentaisl'})
        }

        const token = shipper.createJWT(shipper._id)
        res.json({success: true, token, id: shipper._id, shipper, quote })

    } catch (error) {
        console.log(error);
        res.json({success: false, message: 'error'})
    }
}


export const getShippers = async (req, res, next) => {
    try {
        const shippers = await shipperModel.find()
        res.json({
            success: true,
            data: shippers
          });
    } catch (error) {
        return next(new HttpsError(error))
    }
}