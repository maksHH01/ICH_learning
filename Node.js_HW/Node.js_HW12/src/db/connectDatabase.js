import mongoose from "mongoose";

const { MONGODB_ULI } = process.env;

const connectDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_ULI);
    console.log(`Successfully connect to database`);
  } catch (error) {
    console.log(`Error connect database : ${error.message}`);
    throw error;
  }
};

export default connectDatabase;
