
import { CLEAR_ERRORS, GET_ERRORS } from './types'

export const clearErrors = () => dispatch => {
    const errors = {
        msg: {},
        status: null
    }
    dispatch({
        type: CLEAR_ERRORS,
        payload: errors
    })
}

export const returnErrors = (msg, status) => {
    return{
        type: GET_ERRORS,
        payload: {msg, status}
    }
}