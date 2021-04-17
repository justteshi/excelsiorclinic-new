import axios from 'axios'
import { returnErrors } from './errors'
import { USER_LOADED, USER_LOADING, AUTH_ERROR} from './types'

//check token and load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({
        type: USER_LOADING
    })

    //get token from state
    const token = getState().auth.token
    //headers
    const headers = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //if token add to headers
    if (token) {
        headers.headers["Authorization"] = `Token ${token}`
    }

    axios.get('api/auth/user', headers)
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        })
        .catch(err =>{
            dispatch(returnErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })

        })
    
}