import React, {useState} from 'react'
import './City.css'

const City = (props) => {
    const {name, weather, main} = props.weather
    const [cities, setCities] = useState([])

    return(
        <div className='city-card'>
            <h3 className='title'>{name}</h3>
            <img 
                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} 
                alt={weather[0].description} 
            />
            <h4 className='main'>{weather[0].main}</h4>
            <p>Temperature: {Math.round(main.temp - 273.15)} C</p>
            <p>Feels like: {Math.round(main.feels_like - 273.15)} C</p>
            <p>Humidity: {main.humidity} %</p>
        </div>
    )
}

export default City