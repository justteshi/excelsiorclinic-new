import React, { useState } from 'react'
import { Form, Row, Col, Button, FormGroup} from 'react-bootstrap'


const WriteUsSection = () => {
    const [validated, setValidated] = useState(false)

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault()
        event.stopPropagation()
        }

        setValidated(true);
    };
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
                <Form className="write-us-form" validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control required type="text" placeholder="Name" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="validationCustom01">
                                <Form.Control required type="email" placeholder="Email" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group controlId="validationCustom03">
                                <Form.Control required type="phone" placeholder="Phone" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="validationCustom04">
                                <Form.Control required as="select" custom size="lg" placeholder="Departaments" >
                                    <option>Departaments</option>
                                    <option>Teeth Cleaning</option>
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
                                <Form.Control required type="text" placeholder="Adress" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <Form.Control className="message-input" rows="5" as="textarea" type="text" placeholder="Message" />
                        </Col>
                    </Row>
                    <Button  className="form-btn" type="submit">Submit  &#10140;</Button>
                </Form>
            </div>
        </div>
    )
}

export default WriteUsSection
