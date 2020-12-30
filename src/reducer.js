import * as actions from './actionTypes'

export default function reducer(state = [], action) {
    switch(action.type) {
        case actions.REMOVE_CITY: 
            return state.filter(city => city.id !== id)
        case actions.UPDATE_CITY: 
            return console.log('update city')
        default:
            return state
    }
}