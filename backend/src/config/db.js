import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/spotify`);
    console.log('MongoDB Connection Successfull');
  } catch (error) {
    console.error("MongoDB Connextion Failed", error);
    process.exit(1);
  }
};
export default connectDB;
