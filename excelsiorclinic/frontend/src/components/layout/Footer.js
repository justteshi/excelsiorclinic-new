import React from 'react'
import companyLogo from '../../../static/images/excelsior_logo.png'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer container">
                <div className="clinic-info">
                    <img src={companyLogo} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nemo qui numquam quia voluptates dignissimos vel eos, amet doloremque?</p>
                    <p>&#169;1463 Sofia, Dospat str. 42 / 14463 София, ул. Доспат 42</p>
                    <p>&#169;+359 887 537 424</p>
                    <p>&#169;nikova@axcelsiorclinic.com</p>

                </div>
                <div className="dental-clinic">
                    <h4>Dental Clinic</h4>
                    <p>Kenneth Davidson</p>
                    <p>Donald Hansen</p>
                    <p>Ivan Stoyanov</p>
                    <p>Ivan Stoyanov</p>
                    <p>Ivan Stoyanov</p>
                    <p>Ivan Stoyanov</p>
                </div>
                <div className="our-services">
                    <h4>Our Services</h4>
                    <p>Teeth Whitening</p>
                    <p>Teeth Cleaning</p>
                    <p>Modern Anesthetic</p>
                    <p>Quality Brackets</p>
                    <p>Dental Calculus</p>
                    <p>Paradontosis</p>
                </div>
                <div className="opening-hours">
                    <h4>Opening Hours</h4>
                    <div className="monday">
                        <p className="day">Monday</p>
                        <p className="hours">8.00-17.00</p>
                    </div>
                    <div className="tuesday">
                        <p className="day">Tuesday</p>
                        <p className="hours">8.00-17.00</p>
                    </div>
                    <div className="wednesday">
                        <p className="day">Wednesday</p>
                        <p className="hours">8.00-17.00</p>
                    </div>
                    <div className="thursday">
                        <p className="day">Thursday</p>
                        <p className="hours">8.00-17.00</p>
                    </div>
                    <div className="friday">
                        <p className="day">Friday</p>
                        <p className="hours">9.30-17.00</p>
                    </div>
                    <div className="saturday">
                        <p className="day">Saturday</p>
                        <p className="hours">9.30-15.00</p>
                    </div>

                </div>
            </div>
            <hr />
            <p className="copyright" style={{textAlign: 'center'}}>Copyright &#169; 2021 Excelsior All right reserved.</p>
        </div>
        
    )
}

export default Footer
