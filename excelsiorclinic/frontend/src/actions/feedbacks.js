// HTTP requests
import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
import { returnErrors } from './errors'
import { GET_FEEDBACKS, ADD_FEEDBACK, GET_ERRORS } from './types'

//Get Feedbacks
export const getFeedbacks = () => dispatch => {
    axios
    .get('/api/articles/')
    .then(res => {
        dispatch({
            type: GET_FEEDBACKS,
            payload: res.data
        })
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)))
}
//Add Feedback
export const addFeedback = (feedback) => dispatch => {
    const csrftoken = Cookies.get('csrftoken');
    console.log(csrftoken)
    
    axios
    .post('/api/articles/', feedback)
    .then(res => {
        dispatch({
            type: ADD_FEEDBACK,
            payload: res.data
        })
    })
    .catch(err=> dispatch(returnErrors(err.response.data, err.response.status)))
}