import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'
import DoctorsSection from '../HomePage/DoctorsSection'

const AboutPage = () => {
    const [services, setServices] = useState([])
    const firstFour = services.slice(0,4)

    useEffect(() => {
        axios.get('api/services/')
        .then(response=> {
            setServices(response.data)
        })
        .catch(err=> {
            console.log(err)
        })
    }, [])

    const style ={
        height: "600px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "8em"
    }
    const progressBarsValues = {
        goodStaff: 80,
        modernMachinery: 70,
        consultant: 95,
        service: 72
    }

    return (
        <>
            <div className="about-us-cover-img">
                    <h1 className="feedback-heading-one">About Us</h1>
                    <h5 className="feedback-heading-two">Home / About Us</h5>
            </div>
            <div style={style} className="container">
                <div className="about-us-left">
                    {/* <img src="../../../static/images/why_choose_us.jpg" /> */}
                </div>
                <div className="choose-us-right">
                    <div className="choose-us-headng">
                        <h1>Why</h1> 
                        <h1>Choose</h1>
                        <h1>Us</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
                    <div className="progress-bars">
                        <div className="progress-info">
                            <p style={{width: `${progressBarsValues.goodStaff - 2}%`}}>Good Staff</p>
                            <span className="percentage">{`${progressBarsValues.goodStaff}%`}</span>
                        </div>
                        <ProgressBar now={progressBarsValues.goodStaff} />
                        
                        <div className="progress-info">
                            <p style={{width: `${progressBarsValues.modernMachinery - 2}%`}}>Modern Machinery</p>
                            <span className="percentage">{`${progressBarsValues.modernMachinery}%`}</span>
                        </div>
                        <ProgressBar now={progressBarsValues.modernMachinery}/>

                        <div className="progress-info">
                            <p style={{width: `${progressBarsValues.consultant - 2}%`}}>An enthusiastic consultant</p>
                            <span className="percentage">{`${progressBarsValues.consultant}%`}</span>
                        </div>
                        <ProgressBar now={progressBarsValues.consultant}/>

                        <div className="progress-info">
                            <p style={{width: `${progressBarsValues.service - 2}%`}}>Great service</p>
                            <span className="percentage">{`${progressBarsValues.service}%`}</span>
                        </div>
                        <ProgressBar now={progressBarsValues.service}/>
                    </div>
                </div>
            </div>
            <div className="about-excelsior " style={{height: "900px", background: "#00a6ce", marginTop: "8em", paddingTop: "6em"}}>
                <div className="doctors-heading">
                    <div className="choose-us-headng health-service">
                            <h1>About</h1> 
                            <h1>Excelsior</h1>
                    </div>
                    <p className="about-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
                </div>
                <div className="about-cards">
                    {firstFour.map(item => (
                        <div className="about-card">
                            <div className="card-img"></div>
                            <h5 className="card-heading">{item.title}</h5>
                            <p>{item.text}</p>
                            <Link className="video-btn" to="/">Learn more  &#10140;</Link>
                        </div>
                    ))}
                </div>  
            </div>
            <DoctorsSection />
        </>
    )
}

export default AboutPage
