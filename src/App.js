import axios from "axios"
import { useState } from "react"

function App() {

  const [deg , setdeg] = useState("236")
  const [city, setcity] = useState("France")
  const [desc, setdesc] = useState("Raining")
  const [value, setvalue] = useState("")

  function handelinput(event){
    setvalue(event.target.value)
  }
function getdata(){

  var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=87ad8468e240f0534152a22e2f686002`)

  weather.then(function(resolve){
    setdeg(resolve.data.main.temp)
    setcity(resolve.data.name)
    setdesc(resolve.data.weather[0].description)
  })
} 

  return (
    <div className="flex flex-row justify-center h-[100vh] items-center">
      <div style={{ backgroundImage: 
        "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)" }} 
        className="p-2 rounded-md shadow">
        <h1 className="font-medium">Hey ⛅</h1>
        <p className="text-xs">Do you what to know the weather report :)</p>
        <input onChange={handelinput} type="text" className="rounded-md h-6 text-xs mt-3 p-1 outline-none" placeholder="Cityname" />
        
        <br />
        <button onClick={getdata} className="bg-black text-white rounded-md text-xs p-1 mt-2"> Get Report ⚡</button>

        <p className="text-xs mt-2">Degree : {deg} | City : {city} | Weather : {desc} </p>
      </div>
    </div>
  )
}

export default App