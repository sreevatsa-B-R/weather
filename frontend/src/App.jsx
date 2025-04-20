import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
// Assuming you have some CSS for styling
import AnalogClock from './AnalogClock';
function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);

    try {
      const res = await axios.get(`/api/weather/${city}`);
      setWeather(res.data);
    } catch (err) {
      alert('Could not fetch weather data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
       <AnalogClock />
      <h1 className='title'>Weather App</h1>
      <input
        type="text"
        className='input'
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            getWeather();
          }
        }}
      />
      {/* <button onClick={getWeather}>Get Weather</button> */}

      {loading && <p>Loading...</p>}

      {weather && (
        <div>
          {/* <h3>{weather.name}</h3> */}
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
        </div>
      )}
    </div>
  );
}

export default App;
