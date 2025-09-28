 import mongoose from "mongoose";



export const connectDB =async () =>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
  bufferMaxEntries: 0, // Disable mongoose buffering
  bufferCommands: false, // Disable mongoose buffering
}).then(()=> {
    return `MongoDB connected: ${conn.connection.host}`;
})
        

    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        console.log(`Error connecting to MongoDB: ${error.message}`);
        
        //process.exit(1); //
    }

}

