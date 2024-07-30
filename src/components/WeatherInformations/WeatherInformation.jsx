function WeatherInformation({ weather }) {
    console.log(weather);
  
    return (
      <div>
        <h2>{weather.name}</h2>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
        <p>Temperatura: {weather.main.temp} °C</p>
        <p>Descrição: {weather.weather[0].description}</p>
      </div>
    );
  }
  
  export default WeatherInformation;
  