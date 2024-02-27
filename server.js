// server.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const dbConfig = require('./config/db');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;



// Connect to MongoDB
mongoose.connect(dbConfig.url, dbConfig.options)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Allow requests from http://localhost:3001
app.use(cors({
    origin: 'http://localhost:3001',
  }));

// Routes
app.use('/api/v1', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
