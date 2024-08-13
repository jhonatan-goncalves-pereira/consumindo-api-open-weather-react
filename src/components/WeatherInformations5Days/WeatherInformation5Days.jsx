import './WeatherInformations5Days.css';

function WeatherInformations5Days({ weather5Days }) {
  console.log(weather5Days);

  let dailyForcast = {}

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForcast[date]) {
      dailyForcast[date] = forecast
    }
  }

  const next5DaysForecast = Object.values(dailyForcast).slice(1, 6);
  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit'});
    return newDate;
  }
  return (
    <>
      <div className='weather-container'>
        <p>Previsão próximo 5 Dias</p>
        {next5DaysForecast.map(forecast => (
          <div key={forecast.dt}>
            <p>{convertDate(forecast)}</p>
            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="" />
            <p>{forecast.weather[0].description}</p>
            <p>{Math.round(forecast.main.temp_min)} °C min / {Math.round(forecast.main.temp_max)} °C max</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default WeatherInformations5Days;
