import express from 'express'
import { registerShipper, loginShipper, getShippers} from '../controllers/shipperController.js'
import { authMiddleWare } from '../middlewares/auth.js';
import { getUserQuote } from '../controllers/getQuoteControllers.js';

const shipperRouter = express.Router()

shipperRouter.post('/register', registerShipper);
shipperRouter.post('/login', loginShipper);
shipperRouter.get('/get-shipper', getShippers);
shipperRouter.get('/:id/quotes', authMiddleWare, getUserQuote);


export default shipperRouter;