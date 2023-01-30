const express = require('express');
const productRoutes = require('./routes/productRoutes');
// const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const { connectToDb } = require('./db');

const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use('/products', productRoutes);
// app.use('/auth', authRoutes);

// Connect to MongoDB
connectToDb();

// start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
