import HttpsError from "../models/errrorModel.js"
import getQuoteModel from "../models/getQuoteModel.js"
import Quote from "../models/getQuoteModel.js"
import shipperModel from "../models/shipperModel.js"


// =========== create quote
//Post: quote/create-quote
export const createQuote = async (req, res, next) => {
    try {
        const { id } = req.params; // shipper ID

        // 1. Find the shipper
        const shipper = await shipperModel.findById(id);
        if (!shipper) {
            return res.status(404).json({ message: "Shipper not found" });
        }

        const transport = req.body.weight * 10
        const fee = transport * 0.15
        const totalQuote = transport + fee

        // 2. Create the quote
        const quote = new Quote({
            weight: req.body.weight,
            dimensions: req.body.dimensions,
            origin: req.body.origin,
            destination: req.body.destination,
            email: req.body.email,
            phone: req.body.phone,
            name: req.body.name,
            message: req.body.message,
            amount: totalQuote,

        });


        

        await quote.save();

        // 3. Attach quote to the shipper
        shipper.shipments.push(quote._id);
        await shipper.save();

        return res.json({
            shipper,
            quote,
            message: "Shipment created successfully"
        });

    } catch (error) {
        return next(new HttpsError(error));
    }
};




// =========== get quotes
//Get: quote/get-quote
export const getQuotes = async (req, res, next) => {
  try {
    const quotes = await Quote.find()
    res.json(quotes)
  } catch (error) {
    return next( new HttpsError(error))
  }
}



//============== get quote for a comapny

export const getQuote = async (req, res) => {
    try {
      const { id } = req.params; // Correct extraction
      const quote = await getQuoteModel.findById(id).populate('creator').sort({createdAt: -1})
  
      if (!quote) {
        return res.status(404).json({
          success: false,
          message: "quote not found",
        });
      }
  
      return res.json({
        success: true,
        data: quote,
      });
  
    } catch (error) {
      console.log(error);
  
      return res.status(500).json({
        success: false,
        message: "Server error",
      });
    }
  };



  //get user Quote 
  export const getUserQuote = async (req, res, next) => {
    try {  
        const shippperId = req.params.id
        const quote = await shipperModel.findById(shippperId).populate({path: 'shipments', options: {sort: {createdAt: -1}}})
        res.json(quote)
    } catch (error) {
        return next( new HttpsError(error))
    }
  }
  

