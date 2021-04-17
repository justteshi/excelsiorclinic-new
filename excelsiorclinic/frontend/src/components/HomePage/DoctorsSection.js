import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const DoctorsSection = () => {
    const [doctors, setDoctors] = useState([])
    const firstThree = doctors.slice(0,3)

    useEffect(() => {
        axios.get('/api/doctors/')
        .then(response => {
            setDoctors(response.data)
        })
        .catch(err=> {
            console.log(err)
        })
    }, [])
    const style = {
        height: "1000px",
        background: "",
        paddingTop: "4em"
    }
    console.log(firstThree)
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
                {firstThree.map( doctor => (
                    <div className="doctor-wrapper" key={doctor.id}>
                        <div className="doctor-img" style={{backgroundImage:`url(${doctor.doctor_image})`}}>
                            <div className="doctor-icon">
                            <FontAwesomeIcon icon={faTooth} />
                            </div>
                        </div>

                        <h5 className="doctor-name">Dr.{doctor.name}</h5>
                        <p className="doctor-spec">{doctor.title}</p>
                        <p className="doctor-info">{doctor.about}</p>
                        <div className="doctor-social">
                            <FontAwesomeIcon icon={faTwitter} />
                            <FontAwesomeIcon icon={faFacebookSquare} />
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorsSection
