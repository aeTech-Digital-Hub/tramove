import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import shipperRouter from './routes/shipperRoute.js'
import connectDB from './config/db.js'
import quoteRouter from './routes/getQuoteRoutes.js'
import adminRouter from './routes/adminRoute.js'
import { authMiddleWare } from './middlewares/auth.js'

const PORT = process.env.PORT || 3000
const app = express()


app.use(json())
app.use(cors({credentials: true, origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176']}))
app.use(express.urlencoded({extended: true}))


app.use('/shipper', shipperRouter);
app.use('/quote', authMiddleWare, quoteRouter);
app.use('/admin', adminRouter)



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`tramove backend is listening on PORT ${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()
