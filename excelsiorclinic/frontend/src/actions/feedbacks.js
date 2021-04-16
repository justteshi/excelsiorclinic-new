// HTTP requests
import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
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
    .catch(err=>console.log(err))
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