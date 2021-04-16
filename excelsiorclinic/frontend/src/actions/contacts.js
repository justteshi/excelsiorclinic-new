import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
import { ADD_CONTACT, GET_ERRORS } from './types'


//Add Feedback
export const addContact = (contact) => dispatch => {
    const csrftoken = Cookies.get('csrftoken');
    axios
    .post('/api/contact-us/', contact)
    .then(res => {
        dispatch({
            type: ADD_CONTACT,
            payload: res.data
        })
    })
    .catch(err=> {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
    })
}