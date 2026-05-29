import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI);

    isConnected = db.connections[0].readyState === 1;

    console.log("MongoDB Connected");
  } catch (error) {
    console.log("DB ERROR:", error.message);
    throw error;
  }
};

export default connectDB;