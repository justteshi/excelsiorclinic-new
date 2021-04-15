import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'


const ServicesPage = () => {
    const [services, setServices] = useState([])
    const firstFour = services.slice(0,4)
    const secondFour = services.slice(4,8)

    useEffect(() => {
        document.title = "Services"
        axios.get('/api/services/')
        .then( response => {
            setServices(response.data)
        })
        .catch( err => console.log(err))
    }, [])

    const style = {
        height: "1100px",
        background: "",
        margin: "auto",
        marginTop: "",
        marginBottom: "2em",
        paddingTop: "3em"
    }
    return (
        <div>
            <div className="services-cover-img">
                    <h1 className="feedback-heading-one" >Our Services</h1>
                    <h5 className="feedback-heading-two">Home / Our Services</h5>
            </div>
            <div className="container" style={style}>
                
                <div className="doctors-heading">
                    <div className="choose-us-headng meet-our-doctors">
                            <h1>Our</h1> 
                            <h1>Services</h1>
                    </div>
                    <p className="about-paragraph" style={{color:"inherit"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
                </div>
                <div className="about-cards" style={{marginBottom: "4em"}}>
                    {firstFour.map( item => (
                        <div key={item.id} className="about-card">
                            <div className="service-img">
                                <FontAwesomeIcon className="service-tap-par-icoon" size="2x" icon={faTooth} />
                            </div>
                            <h5 className="card-heading" style={{color:"black"}}>{item.title}</h5>
                            <p style={{color: "inherit"}}>{item.text}</p>
                            <Link className="video-btn" to="/">Learn more  &#10140;</Link>
                        </div>
                    ) )}
                </div>
                <div className="about-cards">
                    {secondFour.map( item => (
                        <div key={item.id} className="about-card">
                            <div className="service-img">
                                <FontAwesomeIcon className="service-tap-par-icoon" size="2x" icon={faTooth} />
                            </div>
                            <h5 className="card-heading" style={{color:"black"}}>{item.title}</h5>
                            <p style={{color: "inherit"}}>{item.text}</p>
                            <Link className="video-btn" to="/">Learn more  &#10140;</Link>
                        </div>
                    ) )}
                </div>    
            </div>
        </div>
    )
}

export default ServicesPage
