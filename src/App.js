import React, {useState} from 'react'

import SeachBar from './components/SeachBar'
import CitiesList from './components/CitiesList'

const App = () => {  
    const [cities, setCities] = useState([])
    
    const getWeatherData = (cityName) => {
        if (cityName === '') {            
            alert('Type a city name.')                  
        } else {
            const appid = 'ad58cc0e85fab249d801a3196b2a3390'
            
            return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`)
                .then(response => {return response.json()})
                    .then(data => setCities(cities.concat(data)))
        }
    }    

    const removeCity = (id) => {
        return setCities(cities.filter(city => city.id !== id))
    }

    const updateCity = (id) => {
        console.log(`update city id: ${id}`)
    }

    return(
        <div>
            <SeachBar onSubmit={getWeatherData}/>
            <CitiesList cities={cities} remove={removeCity} update={updateCity}/>
        </div>
    )
}

export default App