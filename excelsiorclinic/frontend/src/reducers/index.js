// Meating Place

import { combineReducers } from 'redux'
import feedbacks from './feedbacks'
import contacts from './contacts'
import errors from './errors'
import auth from './auth'



export default combineReducers({
    feedbacks,
    contacts,
    errors,
    auth,
})