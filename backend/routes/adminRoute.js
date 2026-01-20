import express from 'express'
import { registerAdmin, loginAdmin, getAdmins, updateAdmin } from '../controllers/adminController.js'
const adminRouter = express.Router()

adminRouter.post('/register', registerAdmin)
adminRouter.post('/login', loginAdmin)
adminRouter.patch('/update', updateAdmin)
adminRouter.get('/get', getAdmins)


export default adminRouter