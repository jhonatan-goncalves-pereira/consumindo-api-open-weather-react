import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "a5711a91fefb37ec73c795feb574bb8e"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    try {
      const response = await axios.get(url)
      console.log(response.data)
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
    </div>
  )
}

export default App
