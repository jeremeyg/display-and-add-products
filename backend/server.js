import express from 'express'; // ES Modules

import {connectDB} from './config/db.js';
import productRoutes from './routes/product.routes.js';
const app = express();
//instead of hardcode we use environment variable (env)
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data, allows us to accept JSON data
app.use(express.json());

app.use('/api/products', productRoutes);

// Start the server and connect to the database
app.listen(PORT, () => {
	connectDB(); // Connect to the database when the server starts
	console.log(`Server started on port ${PORT}`);
});
