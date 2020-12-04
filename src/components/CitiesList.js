import React from 'react'
import City from './City'
import './CitiesList.css'

const CitiesList = (props) => {
    let cities = props.cities.map((city) => {
        return <City key={city.id} weather={city} />
    })

    return <div className='cities-list'>{cities}</div>
}

export default CitiesList