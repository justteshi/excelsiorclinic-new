import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addContact } from '../../actions/contacts'
import { Map, Marker } from "pigeon-maps"
import { Form, Row, Col, Button} from 'react-bootstrap'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import ContactsAlerts from './ContactsAlerts'

const alertOptions = {
    timeout: 3000,
    position: "top center"
}

const ContactsPage = (props) => {
    const [state, setState] = useState({
        name: "",
        phone: "",
        messageOne: ""
    })

    useEffect(() => {
        document.title = "Contacts"
    }, [])

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const clearFields = () => {
        setState({
            ...state,
            name: "",
            phone: "",
            messageOne: "",
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {name, phone, messageOne} = state
        const contact = {name, phone, messageOne}

        props.addContact(contact)
        clearFields()
    }

    return (
        <div style={{marginBottom: "-6px"}}>
            <ContactsAlerts page="contacts"/>
            <div className="contact-us-cover-img">
                    <h1 className="feedback-heading-one">Contact Us</h1>
                    <h5 className="feedback-heading-two">Home / Contact Us</h5>
            </div>
            <div className="container" style={{display: "flex", marginTop: "4em", marginBottom: "4em"}}>
                <div className="contact-us-left" style={{width: "50%", marginRight: "1em"}}>
                    <div className="styled-heading" style={{padding:"0"}}>
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
                    <Form className="contact-us-form" onSubmit={handleSubmit} noValidate>
                        <Row>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control 
                                required 
                                type="text" 
                                placeholder="Full Name" 
                                name="name"
                                value={state.name} 
                                onChange={onChange} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control 
                                required 
                                type="text" 
                                placeholder="Phone Number"
                                name="phone" 
                                value={state.phone} 
                                onChange={onChange} />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control 
                                required 
                                rows="6" 
                                as="textarea" 
                                type="text" 
                                placeholder="Leave Message" 
                                name="messageOne"
                                value={state.messageOne} 
                                onChange={onChange} />
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

ContactsPage.propTypes = {
    addContact: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    contacts: state.contacts.contacts
})

export default connect(mapStateToProps, { addContact })(ContactsPage)