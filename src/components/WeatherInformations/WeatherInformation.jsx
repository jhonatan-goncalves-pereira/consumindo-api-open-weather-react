function WeatherInformation({ weather }) {
    console.log(weather);
  
    return (
      <>
      <div>
        <h2>{weather.name}</h2>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="Weather icon" />
        <p> {Math.round(weather.main.temp)} °C</p>
        <p> {weather.weather[0].description}</p>
      </div>
      <div>
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)}</p>
        <p>Umidade: {weather.main.humidity} </p>
        <p>Pressão: {weather.main.pressure} </p>
      </div>
      
    </>
    );
  }
  
  export default WeatherInformation;
  