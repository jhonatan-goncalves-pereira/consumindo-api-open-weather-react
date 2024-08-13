import './WeatherInformation.css';

function WeatherInformation({ weather }) {
  return (
    <>
      <div className='weather-container'>
        <h2>{weather.name}</h2>
        <div className="weather-info">
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
          <p className='weather-info-temperature'> {Math.round(weather.main.temp)} °C</p>
        </div>
        <p className='weather-description'> {weather.weather[0].description}</p>


        <div className='weather-details'>
          <p>Sensação Térmica: {Math.round(weather.main.feels_like)}</p>
          <p>Umidade: {weather.main.humidity} </p>
          <p>Pressão: {weather.main.pressure} </p>
        </div>

      </div>

    </>
  );
}

export default WeatherInformation;
