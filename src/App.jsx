import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';
import WeatherInformation from './components/WeatherInformations/WeatherInformation';
import WeatherInformation5Days from './components/WeatherInformations5Days/WeatherInformation5Days';

function App() {
  const [weather, setWeather] = useState(null); // Inicializa com null
  const [weather5Days, setWeather5Days] = useState(null);
  const inputRef = useRef();

  async function searchCity() {
    const city = inputRef.current.value;
    const key = import.meta.env.VITE_OPENWEATHER_API_KEY;

    if (!key) {
      console.error('Chave da API não está configurada.');
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    try {
      const apiWeather = await axios.get(url);
      const apiWeather5Days = await axios.get(url5Days);

      setWeather(apiWeather.data);
      setWeather5Days(apiWeather5Days.data);
    } catch (error) {
      if (error.response) {
        console.error(`Error: ${error.response.status} - ${error.response.data.message}`);
      } else {
        console.error('Error:', error.message);
      }
    }
  }

  return (
    <div className='container'>
      <h1>DevAJhon Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      {weather ? (
        <WeatherInformation weather={weather} />
      ) : (
       ""
      )}

      {weather5Days ?
        (<WeatherInformation5Days weather5Days={weather5Days} />):
        ("")
      }
    </div>
  );
}

export default App;
