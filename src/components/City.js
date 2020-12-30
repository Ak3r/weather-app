import React from 'react'
import './City.css'

const City = (props) => {
    const {name, weather, main, id} = props.weather

    const removeCity = () => {
        props.remove(id)
    }

    const updateCity = () => {
        props.update(id)
    }

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
            <button onClick={removeCity}>Delete</button>
            <br/>
            <button onClick={updateCity}>Update</button>
        </div>
    )
}

export default City