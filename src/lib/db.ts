import mongoose from "mongoose";

const mongodb_url = process.env.MONGODB_URL;
if(!mongodb_url){
    throw new Error("MONGODB_URL is not defined")
}

let cached = global.mongoose
if(!cached){
    cached = global.mongoose = {conn:null,promise:null}
}

const connectDb = async ()=>{
    if(cached.conn){
        return cached.conn
    }
    if(!cached.promise){
        cached.promise = mongoose.connect(mongodb_url).then((conn)=>conn.connection)
    }
    try{
        const conn = await cached.promise
        return conn
    }
    catch(error){
        console.log(error)
    }
}

export default connectDb