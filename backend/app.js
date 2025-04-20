// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
// import weatherRoutes from './routes/weather.js';
const weatherRoutes = require('./routes/weather.js');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
