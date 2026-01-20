import mongoose from "mongoose";

const connectDB = async (url) => {
    await mongoose.connect(url).then(() => {
        console.log('Tramove DB connected');
        
    })
}

export default connectDB;