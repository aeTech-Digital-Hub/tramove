import expres from 'express';
const quoteRouter = expres.Router();
import { createQuote, getQuote, getQuotes, getUserQuote } from "../controllers/getQuoteControllers.js";

quoteRouter.post('/create-quote/:id', createQuote)
quoteRouter.get('/get-quote/:id', getQuote)
quoteRouter.get('/get-quote', getQuotes)



export default quoteRouter;