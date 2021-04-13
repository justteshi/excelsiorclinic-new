import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'




const DoctorsSection = () => {
    const style = {
        height: "1000px",
        background: "",
        paddingTop: "4em"
    }
    return (
        <div className="container our-doctors" style={style}>
            <div className="doctors-heading">
                <div className="choose-us-headng meet-our-doctors">
                        <h1>Meet</h1> 
                        <h1>Our</h1>
                        <h1>Doctors</h1>
                </div>
                <p className="doctors-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
            </div>
            <div className="doctors-wrapper">
                <div className="doctor-wrapper">
                    <div className="doctor-img">
                        <div className="doctor-icon">
                        <FontAwesomeIcon icon={faTooth} />
                        </div>
                    </div>

                    <h5 className="doctor-name">Dr. Milena Nikova</h5>
                    <p className="doctor-spec">Orthodintist</p>
                    <p className="doctor-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt</p>
                    <div className="doctor-social">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
                <div className="doctor-wrapper">
                    <div className="doctor-img">
                        <div className="doctor-icon">
                            <FontAwesomeIcon icon={faTooth} />
                        </div>
                    </div>

                    <h5 className="doctor-name">Dr. Milena Nikova</h5>
                    <p className="doctor-spec">Tooth cleaning</p>
                    <p className="doctor-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt</p>
                    <div className="doctor-social">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
                <div className="doctor-wrapper">
                    <div className="doctor-img">
                        <div className="doctor-icon">
                            <FontAwesomeIcon icon={faTooth} />
                        </div>
                    </div>

                    <h5 className="doctor-name">Dr. Milena Nikova</h5>
                    <p className="doctor-spec">Dentist</p>
                    <p className="doctor-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt</p>
                    <div className="doctor-social">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorsSection
