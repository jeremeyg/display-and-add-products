import mongoose from 'mongoose';
import dotenv from 'dotenv';

//This line ensures that the environment variables defined in your .env file (like MONGO_URI) are available in process.env, allowing you to connect to your MongoDB database using mongoose.connect(process.env.MONGO_URI).
dotenv.config();
export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};
