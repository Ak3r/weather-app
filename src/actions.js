import * as actions from './actionTypes'

export function removeCity(id) {
    return {
        type: actions.REMOVE_CITY, 
        payload: {
          id: id
        }
    }
}