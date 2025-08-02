import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });

  const options = {
    connectTimeoutMS: 30000, // 30 sec connection timeout
    socketTimeoutMS: 45000,  // 45 sec socket timeout
    serverSelectionTimeoutMS: 5000, // 5 sec server selection timeout
  };

  await mongoose.connect(process.env.MONGODB_URI, options);
};

export default connectDB;