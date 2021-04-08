import React from 'react'
import { Nav,NavItem, Tab, Tabs } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'


const HealthServiceSection = () => {
    const style = {
        height: "1000px",
        width: "100%",
        background: "#00a6ce",
        display: "flex",
        justifyContent: "center",

    }
    const TeethCleaningTitle = () => {
        return (
            <div >
                <FontAwesomeIcon className="teeth-cleaning-title" icon={faTooth} size="2x"/>
                <h6 className="teeth-cleaning-title">Teeth Cleaning</h6>
            </div>
        )
    }
    const TeethWhiteningTitle = () => {
        return (
            <div>
                <FontAwesomeIcon className="teeth-cleaning-title"  icon={faTooth} size="2x"/>
                <h6 className="teeth-cleaning-title">Teeth Whitening</h6>
            </div>
        )
    }
    const QualityBracketsTitle = () => {
        return (
            <div>
                <FontAwesomeIcon className="teeth-cleaning-title"  icon={faTooth} size="2x"/>
                <h6 className="teeth-cleaning-title">Quality Brackets</h6>
            </div>
        )
    }
    const ModernAnaestheticTitle = () => {
        return (
            <div>
                <FontAwesomeIcon className="teeth-cleaning-title"  icon={faTooth} size="2x"/>
                <h6 className="teeth-cleaning-title">Modern Anaesthetic</h6>
            </div>
        )
    }
    const DentalCalculusTitle = () => {
        return (
            <div>
                <FontAwesomeIcon className="teeth-cleaning-title" icon={faTooth} size="2x"/>
                <h6 className="teeth-cleaning-title">Dental Calculus</h6>
            </div>
        )
    }
    const ParadontosisTitle = () => {
        return (
            <div>
                <FontAwesomeIcon className="teeth-cleaning-title"  icon={faTooth} size="2x"/>
                <h6 className="teeth-cleaning-title">Paradontosis</h6>
            </div>
        )
    }
    const TeethCleaning = () => {
        return(
            <div>
                <div className="teeth-cleaning-wrapper">
                    <div className="teeth-cleaning-img"></div>
                    <div className="teeth-cleaning-right">
                        <h1>THE HIGHLIGHTERS OF THE TECHNOLOGY WHITENING WHITE ZOOM</h1>
                        <p>orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">View more  &#10140;</a>
                    </div>
                </div>
            </div>
        )
    }
    const TeethWhitening = () => {
        return(
            <div>
                <div className="teeth-whitening-wrapper">
                    <div className="teeth-whitening-img"></div>
                    <div className="teeth-whitening-right">
                        <h1>WHITE HIGHLIGHTERS OF THE TECHNOLOGY WHITENING WHITE ZOOM</h1>
                        <p>orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>orem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <a href="#">View more  &#10140;</a>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div style={style}>
            <div className="container" style={{background:"", height:"800px", margin: "auto"}}>
                <div className="health-service-heading">
                    <div className="choose-us-headng health-service">
                            <h1>Our</h1> 
                            <h1>Health</h1>
                            <h1>Services</h1>
                    </div>
                    <p className="health-service-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
                </div>
            
                <Tabs justify defaultActiveKey="teeth-cleaning">
                    <Tab eventKey="teeth-cleaning" title={<TeethCleaningTitle />}>
                        <TeethCleaning />
                    </Tab>
                    <Tab eventKey="teeth-whitening" title={<TeethWhiteningTitle />}>
                        <TeethWhitening />
                    </Tab>
                    <Tab eventKey="brackets" title={<QualityBracketsTitle />}>
                        <TeethWhitening />
                    </Tab>
                    <Tab eventKey="anaesthetic" title={<ModernAnaestheticTitle />}>
                        <TeethWhitening />
                    </Tab>
                    <Tab eventKey="calculus" title={<DentalCalculusTitle />}>
                        <TeethWhitening />
                    </Tab>
                    <Tab eventKey="paradontosis" title={<ParadontosisTitle />}>
                        <TeethWhitening />
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default HealthServiceSection
