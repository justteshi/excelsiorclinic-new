import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth, faCheckDouble } from '@fortawesome/free-solid-svg-icons'


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
                    <div className="styled-heading meet-our-doctors gray-logo">
                            <h1>Our</h1> 
                            <h1>Services</h1>
                    </div>
                    <p className="about-paragraph" style={{color:"inherit"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
                </div>
                <div className="about-cards" style={{marginBottom: "4em"}}>
                    {firstFour.map( item => (
                        <div key={item.id} className="service-card">
                            <div className="service-img">
                                <FontAwesomeIcon className="service-tap-par-icoon" size="2x" icon={faTooth} />
                            </div>
                            <h5 className="card-heading" style={{color:"black"}}>{item.title}</h5>
                            <p style={{color: "inherit"}}>{item.text}</p>
                            <Link className="service-btn" to="/">Learn more  &#10140;</Link>
                        </div>
                    ) )}
                </div>
                <div className="about-cards">
                    {secondFour.map( item => (
                        <div key={item.id} className="service-card">
                            <div className="service-img">
                                <FontAwesomeIcon className="service-tap-par-icoon" size="2x" icon={faTooth} />
                            </div>
                            <h5 className="card-heading" style={{color:"black"}}>{item.title}</h5>
                            <p style={{color: "inherit"}}>{item.text}</p>
                            <Link className="service-btn" to="/">Learn more  &#10140;</Link>
                        </div>
                    ) )}
                </div>    
            </div>
            <div className="services-last-wrapper">
                <div className="service-last-right-left">   
                    <div className="before-after-left">
                        <div className="before-after-image"></div>
                    </div>
                    <div className="before-after-right">
                        <div className="styled-heading" style={{padding:"0"}}>
                            <h1>Whitening Zoom</h1> 
                            <h1>White</h1>
                            <h1>Perfect</h1>
                        </div>
                        <p className="service-last-paragraph" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
                        <p><FontAwesomeIcon className="service-tap-par-icoon"  icon={faCheckDouble} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><FontAwesomeIcon className="service-tap-par-icoon"  icon={faCheckDouble} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><FontAwesomeIcon className="service-tap-par-icoon"  icon={faCheckDouble} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p><FontAwesomeIcon className="service-tap-par-icoon"  icon={faCheckDouble} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        
                        <Link to="/services" className="service-last-btn">
                            Learn more  &#10140;
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage
