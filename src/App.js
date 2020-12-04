import React, {useState} from 'react'
import SeachBar from './components/SeachBar'
import CitiesList from './components/CitiesList'

const App = () => {  
    const [cities, setCities] = useState([])
    // let cities = []
    
    const getWeatherData = (cityName) => {
        const appid = 'ad58cc0e85fab249d801a3196b2a3390'
        
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`)
            .then(response => {return response.json()})
                .then(data => setCities(cities.concat(data)))
    }

    return(
        <div>
            <SeachBar onSubmit={getWeatherData}/>
            <CitiesList cities={cities}/>
        </div>
    )
}

export default App