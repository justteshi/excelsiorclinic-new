import React from 'react'
import companyLogo from '../../../static/images/excelsior_logo_white.png'
import styles from './Footer.module.css'

const Footer = () => {

    return (
        <div className="footer-wrapper" >
            <div className="footer container">
                <div className="clinic-info">
                    <img src={companyLogo} style={{height:"100px", marginBottom: "1em"}}/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nemo qui numquam quia voluptates dignissimos vel eos, amet doloremque?</p>

                </div>
                <div className="dental-clinic">
                    <h4>Office</h4>
                    <p>Kenneth Davidson</p>
                    <p>Donald Hansen</p>
                </div>
                <div className="our-services">
                    <h4>Contact</h4>
                    <p>Teeth Whitening</p>
                    <p>Teeth Cleaning</p>
                </div>
                <div className="opening-hours">
                    <h4>Open Hours</h4>
                    <div className="monday">
                        <p className="day">Mon - Fri:</p>
                        <p className="hours">8.00-17.00</p>
                    </div>
                    <div className="tuesday">
                        <p className="day">Saturday</p>
                        <p className="hours">8.00-17.00</p>
                    </div>
                </div>
            </div>
            <hr />
            <p className="copyright" style={{textAlign: 'center'}}>Copyright &#169; 2021 Excelsior All right reserved.</p>
        </div>
        
    )
}

export default Footer
