import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Form, Row, Col, Button, FormGroup} from 'react-bootstrap'


const WriteUsSection = (props) => {
    const [validated, setValidated] = useState(false)
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        departament: "",
        adress: "",
        message: ""
    })


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
            email: "",
            phone: "",
            departament: "departaments",
            adress: "",
            message: ""
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {name, email, phone, departament, adress, message} = state
        const writeUs = {name, email, phone, departament, adress, message}
        // console.log(feedback)
        props.addWriteUs(writeUs)
        clearFields()
    }


    const style = {
        height: "1000px",
        width: "100%",
        background: "#00a6ce",
        display: "flex",
        justfyContent: "center",
    }
    return (
        <div className="" style={style}>
            <div className="container" style={{background:"", height: "80%", margin: "auto"}}>
                <div className="choose-us-headng health-service">
                            <h1>Write</h1> 
                            <h1>Us</h1>
                    </div>
                <p className="write-us-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, suscipit pariatur quos atque voluptas explicabo beatae quia sunt esse inventore sint odit recusandae similique dolores est necessitatibus quo totam.
                </p>
                <Form className="write-us-form" noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="">
                                <Form.Control
                                required
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={state.name}
                                onChange={onChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="">
                                <Form.Control 
                                required 
                                type="email" 
                                placeholder="Email"
                                name="email"
                                value={state.email}
                                onChange={onChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="">
                                <Form.Control 
                                required 
                                type="phone"
                                placeholder="Phone"
                                name="phone"
                                value={state.phone}
                                onChange={onChange} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="">
                                <Form.Control 
                                
                                as="select" 
                                custom 
                                size="lg" 
                                placeholder="Departaments"
                                name="departaments"
                                value={state.departament}
                                onChange={onChange} >
                                    <option value="Departaments">Departaments</option>
                                    <option value="teeth-cleaning">Teeth Cleaning</option>
                                    <option>Teeth Whitening</option>
                                    <option>Brackets</option>
                                    <option>Option 4</option>
                                    <option>Option 5</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="validationCustom05">
                                <Form.Control 
                                required 
                                type="text" 
                                placeholder="Adress"
                                name="adress"
                                value={state.adress}
                                onChange={onChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Control 
                            className="message-input" 
                            rows="5" 
                            as="textarea" 
                            type="text" 
                            placeholder="Message"
                            name="message"
                            value={state.message}
                            onChange={onChange}/>
                        </Col>
                    </Row>
                    <Button  className="form-btn" type="submit">Submit  &#10140;</Button>
                </Form>
            </div>
        </div>
    )
}


WriteUsSection.propTypes = {
    writeUs: PropTypes.array.isRequired,
    addWriteUs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    writeUs: state.writeus.writeUs
})

export default connect(mapStateToProps, { addWriteUs })(WriteUsSection)
