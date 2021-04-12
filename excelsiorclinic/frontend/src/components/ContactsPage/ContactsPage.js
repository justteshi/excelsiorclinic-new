import React, {useState, useEffect} from 'react'
import { Map, Marker } from "pigeon-maps"
import { Form, Row, Col, Button, FormGroup} from 'react-bootstrap'


const ContactsPage = () => {
    const [fullName, setFullName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault();

    }
    return (
        <div>
            <div className="contact-us-cover-img">
                    <h1 className="feedback-heading-one">Contact Us</h1>
                    <h5 className="feedback-heading-two">Home / Contact Us</h5>
            </div>
            <div className="container" style={{display: "flex", marginTop: "4em", marginBottom: "4em"}}>
                <div className="contact-us-left" style={{width: "50%", marginRight: "1em"}}>
                    <div className="choose-us-headng">
                        <h1>Our</h1> 
                        <h1>Office</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
                    <div className="contact-us-adress" style={{display: "flex",}}>
                        <div className="bg-adress">
                            <h5 style={{color:"black", fontWeight: "bold"}}>Sofia</h5>
                            <p>1463 Sofia, Dospat str. 42 / 1463 София, ул. Доспат 42</p>
                        </div>
                        <div className="eu-adress">
                            <h5 style={{color:"black", fontWeight: "bold"}}>Sofia</h5>
                            <p>1463 Sofia, Dospat str. 42 / 1463 София, ул. Доспат 42</p>
                        </div>
                    </div>
                </div>
                <div className="contact-us-right" style={{width: "50%", marginLeft: "1em"}}>
                    <Form className="contact-us-form" onSubmit={handleSubmit}>
                        <Row>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control required type="text" placeholder="Full Name" value={fullName} onChange={(e) => {setFullName(e.target.value)}} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control required type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value)}} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control required rows="6" as="textarea" type="text" placeholder="Leave Message" value={message} onChange={(e) => {setMessage(e.target.value)}} />
                            </Form.Group>
                        </Row>
                        <Button className="contact-us-btn" type="submit">Send message  &#10140;</Button>
                    </Form>
                </div>
            </div>
            <Map metaWheelZoom={true} height={600} defaultCenter={[42.68664725157861, 23.313584660733856]} defaultZoom={17} >
                 <Marker width={50} anchor={[42.68664725157861, 23.313584660733856]} />
            </Map>
        </div>
    )
}

export default ContactsPage
