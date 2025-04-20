// import express from 'express';
const express = require('express');
// import axios from 'axios';
const axios = require('axios');

const router = express.Router();

// API Route to fetch weather data
router.get('/:city', async (req, res) => {
  const city = req.params.city;
  const apiKey = process.env.WEATHER_API_KEY;  // Get API key from .env

  try {
    // Use the OpenWeatherMap API or any other weather API
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

module.exports = router;
