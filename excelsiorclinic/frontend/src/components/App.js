import React, { Suspense, useEffect } from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import { Provider } from 'react-redux'
import store from '../store'

import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"


import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage/AboutPage'
import ServicesPage from './ServicesPage/ServicesPage'
import GalleryPage from './GalleryPage/GalleryPage'
import NewsPage from './NewsPage/NewsPage'
import ContactsPage from './ContactsPage/ContactsPage'
import RegistrationPage from './RegistrationPage/RegistrationPage'
import FeedbackPage from './FeedbackPage/FeedbackPage'
import NotFoundPage from './NotFoundPage/NotFoundPage'
import LoginPage from "./LoginPage/LoginPage"
import RegisterPage from "./RegisterPage/RegisterPage"
import PrivateRoute from "./accounts/PrivateRoute"

// import { loadUser } from '../actions/auth'


//Alerts Options
const alertOptions = {
    timeout: 3000,
    position: "top center"
}

export const App = (props) => {

    
    return (
        <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
            <div className="app-wrapper">
                <Router>
                    <Navbar />
                    
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route  path="/about" component={AboutPage} />
                            <Route  path="/services" component={ServicesPage} />
                            <Route  path="/gallery" component={GalleryPage} />
                            <Route  path="/news" component={NewsPage} />
                            <Route  path="/contacts" component={ContactsPage} />
                            
                            <PrivateRoute  path="/registration" component={RegistrationPage} />
                            <PrivateRoute  path="/feedback" component={FeedbackPage} />

                            <Route  path="/login" component={LoginPage} />
                            <Route  path="/sign-up" component={RegisterPage} />


                            <Route component={NotFoundPage} />

                        </Switch>
                    </Suspense>
                    <Footer />
                </Router>
                
            </div>
        </AlertProvider>
        </Provider>
    )
}


const appDiv = document.getElementById("app")
render(<App name="This is props" />,appDiv)
