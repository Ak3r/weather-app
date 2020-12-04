import React, {useState} from 'react'
import './SeachBar.css'

const SeachBar = (props) => {
    const [cityName, setCityName] = useState('')

    const onFormSubmit = e => {
        e.preventDefault()

        props.onSubmit(cityName)
        setCityName('')
    }

    return (
        <div className='wrapper'>
            <form className='ui form' >
                <div className='field'>
                    <label>City Search</label>
                    <input 
                        type='text' 
                        value={cityName} 
                        onChange={e => { setCityName(e.target.value) }}
                        placeholder='Type a city name'/>
                </div>
                <button 
                    onClick={onFormSubmit}
                    className="ui button"
                >
                    Add City
                </button>
            </form>
        </div>
    )
}

export default SeachBar