import mongoose from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error(`Not found MONGODB_URI`);
}

const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database connected successfully!");
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Error connet to Database: ${error.message}`);
    }
    throw error;
  }
};

export default connectDatabase;
