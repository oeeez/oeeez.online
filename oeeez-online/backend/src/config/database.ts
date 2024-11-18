import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log();
  } catch (error) {
    console.error();
    process.exit(1);
  }
};

export default connectDB;
