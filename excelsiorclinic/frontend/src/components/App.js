import React from "react"
import { render } from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom"


import Header from "./layout/Header"

import HomePage from './HomePage/HomePage'
import AboutPage from './AboutPage/AboutPage'
import ServicesPage from './ServicesPage/ServicesPage'
import GalleryPage from './GalleryPage/GalleryPage'
import NewsPage from './NewsPage/NewsPage'
import ContactsPage from './ContactsPage/ContactsPage'
import RegistrationPage from './RegistrationPage/RegistrationPage'


export const App = (props) => {
    return (
        <div className="center">
             <Router>
                 <Header />
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/services" component={ServicesPage} />
                    <Route exact path="/gallery" component={GalleryPage} />
                    <Route exact path="/news" component={NewsPage} />
                    <Route exact path="/contacts" component={ContactsPage} />
                    {/* Not for user registration */}
                    <Route exact path="/registration" component={RegistrationPage} />

                </Switch>
            </Router>
        </div>
    )
}


const appDiv = document.getElementById("app")
render(<App name="This is props" />,appDiv)
