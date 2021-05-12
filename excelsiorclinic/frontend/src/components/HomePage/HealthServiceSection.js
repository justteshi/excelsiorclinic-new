import React from 'react'
import { Link } from 'react-router-dom'
import { Nav,NavItem, Tab, Tabs } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth, faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import backgroundImage from '../../../static/images/2560x1000-right.png'

const HealthServiceSection = () => {
    const style = {
        height: "",
        width: "100%",
        background: `url(${backgroundImage})`,
        backgroundSize: "cover",
        paddingTop: "14em",

    }
    console.log(backgroundImage)

    const HealthServicesTabTitle = () => {
        return (
            <div>
                <FontAwesomeIcon className="teeth-cleaning-title"  icon={faTooth} size="2x"/>
                <h6 className="teeth-cleaning-title">Paradontosis</h6>
            </div>
        )
    }
    const HealthServicesTab = () => {
        return(
            <div className="services-tap-wrapper">
                <div className="services-tap-img"></div>
                <div className="services-tap-right">
                    <h2>THE HIGHLIGHTERS OF THE TECHNOLOGY WHITENING WHITE ZOOM</h2>
                    <p><FontAwesomeIcon className="service-tap-par-icoon"  icon={faCheckDouble} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p><FontAwesomeIcon className="service-tap-par-icoon"  icon={faCheckDouble} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p><FontAwesomeIcon className="service-tap-par-icoon"  icon={faCheckDouble} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p><FontAwesomeIcon className="service-tap-par-icoon"  icon={faCheckDouble} /> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="tab-btn-wrapper">
                        <Link className="tab-btn" to="/services">Read more  &#10140;</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={style}>
            <div className="container" style={{background:"", height:"800px", margin: "auto"}}>
                <div className="health-service-heading">
                    <div className="styled-heading health-service">
                            <h1>Our</h1> 
                            <h1>Health</h1>
                            <h1>Services</h1>
                    </div>
                    <p className="health-service-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
                </div>
            
                <Tabs justify defaultActiveKey="teeth-cleaning">
                    <Tab eventKey="teeth-cleaning" title={<HealthServicesTabTitle />}>
                        <HealthServicesTab />
                    </Tab>
                    <Tab eventKey="teeth-whitening" title={<HealthServicesTabTitle />}>
                        <HealthServicesTab />
                    </Tab>
                    <Tab eventKey="brackets" title={<HealthServicesTabTitle />}>
                        <HealthServicesTab />
                    </Tab>
                    <Tab eventKey="anaesthetic" title={<HealthServicesTabTitle />}>
                        <HealthServicesTab />
                    </Tab>
                    <Tab eventKey="calculus" title={<HealthServicesTabTitle />}>
                        <HealthServicesTab />
                    </Tab>
                    <Tab eventKey="paradontosis" title={<HealthServicesTabTitle />}>
                        <HealthServicesTab />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default HealthServiceSection
