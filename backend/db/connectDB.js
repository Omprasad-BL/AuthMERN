import mongoose from "mongoose";
export const connectDB = async (req, res, next) =>{
    try{
       const conn= await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongo db connected + ${conn.connection.host}`);
        
    }
    catch(err){
        console.error("Error connecting to Mongo");
        process.exit(1); // 1 if failure

    }
}