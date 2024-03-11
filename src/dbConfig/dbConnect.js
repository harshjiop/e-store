import mongoose from "mongoose";

import { DB_NAME } from "@/constants";

const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`)   
        console.log(`\n mongodb connected !! DB HOST: ${connectionInstance.connection.host}`)
        console.log(connectionInstance)  //  
    } catch (error) {
        console.log("Mongo connection error", error)
        process.exit(1)
    }
}

export default connectDB