import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import WeatherInformation from './components/WeatherInformations/WeatherInformation'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "a5711a91fefb37ec73c795feb574bb8e"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    try {
      const apiWeather = await axios.get(url)
      setWeather(apiWeather.data)
    } catch (error) {
      if (error.response) {
        console.error(`Error: ${error.response.status} - ${error.response.data.message}`)
      } else {
        console.error('Error:', error.message)
      }
    }
  }

  return (
    <div>
      <h1>JhonDev Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>

      <WeatherInformation weather={weather} ></WeatherInformation>
    </div>
  )
}

export default App
