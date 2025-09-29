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
//     return `MongoDB connected: ${conn.connection.host}`;
// })
        

//     } catch (error) {
//         console.error(`Error connecting to MongoDB: ${error.message}`);
//         console.log(`Error connecting to MongoDB: ${error.message}`);
        
//         //process.exit(1); //
//     }

// }




export const connectToMongoDB = async () => {
  const retryDelay = 5000; // 5 seconds
  let attemptCount = 0;

  while (true) {
    try {
      attemptCount++;
      console.log(`🔄 Attempting to connect to MongoDB (attempt #${attemptCount})...`);
      
      await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
        bufferMaxEntries: 0,
        bufferCommands: false,
      });
      
      console.log('✅ Connected to MongoDB successfully');
      break; // Exit the loop on successful connection
      
    } catch (error) {
      console.error(`❌ MongoDB connection failed (attempt #${attemptCount}):`, error.message);
      console.log(`⏳ Waiting ${retryDelay/1000} seconds before retrying...`);
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, retryDelay));
    }
  }
};

// Handle connection events
mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected. Attempting to reconnect...');
  connectToMongoDB();
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
