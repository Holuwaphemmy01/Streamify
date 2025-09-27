import mongoose from "mongoose";



// export const connectDB =async () =>{

//     try {
//         const conn = await mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverSelectionTimeoutMS: 30000, // Increase timeout to 30 seconds
//   bufferMaxEntries: 0, // Disable mongoose buffering
//   bufferCommands: false, // Disable mongoose buffering
// }).then(()=> {
//     console.log(`MongoDB connected: ${conn.connection.host}`);
// })
        

//     } catch (error) {
//         console.error(`Error connecting to MongoDB: ${error.message}`);
//         console.log(`Error connecting to MongoDB: ${error.message}`);
        
//         //process.exit(1); //
//     }

// }

export const connectDB = async (retryCount = 0) => {
  const maxRetries = 5;
  const retryDelay = 5000; // 5 seconds

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      bufferMaxEntries: 0,
      bufferCommands: false,
    });
    
    console.log('✅ Connected to MongoDB successfully');
    return true;
    
  } catch (error) {
    console.error(`❌ MongoDB connection failed (attempt ${retryCount + 1}/${maxRetries}):`, error.message);
    
    if (retryCount < maxRetries - 1) {
      console.log(`🔄 Retrying connection in ${retryDelay/1000} seconds...`);
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, retryDelay));
      
      // Recursive retry with exponential backoff
      const newDelay = retryDelay * Math.pow(2, retryCount); // 5s, 10s, 20s, 40s
      return connectToMongoDB(retryCount + 1);
    } else {
      console.error('💀 Max retries reached. Could not connect to MongoDB');
      throw error;
    }
  }
};