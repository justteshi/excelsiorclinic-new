import React from 'react'
import companyLogo from '../../../static/images/excelsior_logo.png'

const Footer = () => {
    return (
        <div>
            <div className="footer container">
                <div className="clinic-info">
                    <img src={companyLogo} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus nemo qui numquam quia voluptates dignissimos vel eos, amet doloremque?</p>
                    <p><i className="fa fa-house-user"></i>1463 Sofia, Dospat str. 42 / 14463 София, ул. Доспат 42</p>
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
                    <p>Monday 8.00-17.00</p>
                    <p>Tuesday 8.00-17.00</p>
                    <p>Wednesday 8.00-17.00</p>
                    <p>Thursday 8.00-17.00</p>
                    <p>Friday 9.30-17.00</p>
                    <p>Saturday 9.30-15.00</p>
                </div>
            </div>
            <hr />
            <p style={{textAlign: 'center'}}>Copyright &#169; 2021 Excelsior All right reserved.</p>
        </div>
        
    )
}

export default Footer
