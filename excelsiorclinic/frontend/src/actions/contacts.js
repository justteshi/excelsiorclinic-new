import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
import { returnErrors } from './errors'
import { ADD_CONTACT } from './types'


//Add Feedback
export const addContact = (contact) => dispatch => {
;
    axios
    .post('/api/contact-us/', contact)
    .then(res => {
        dispatch({
            type: ADD_CONTACT,
            payload: res.data
        })
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)))
}