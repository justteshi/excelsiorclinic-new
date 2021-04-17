import React,{
    useState,
    useEffect
} from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap'

const RegisterPage = () => {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        password2: "",
    })

    useEffect(() => {
        document.title = "Sign up"
        return () => {
           // props.clearErrors()
        }
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
            username: "",
            email: "",
            password: "",
            password2: ""

        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, email, password, password2} = state
        const contact = {username, email, password, password2}
        console.log(state)
        //props.addContact(contact)
        clearFields()
    }

    return (
        <div style={{width: "30%"}} className="container">
            <div className="choose-us-headng">
                <h1></h1> 
                <h1>Register</h1>
            </div>
            <Form className="contact-us-form" onSubmit={handleSubmit} noValidate>
                <Row>
                    <Form.Group controlId="">
                        <Form.Control 
                        required 
                        type="text" 
                        placeholder="username" 
                        name="username"
                        value={state.username} 
                        onChange={onChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="">
                        <Form.Control 
                        required 
                        type="email" 
                        placeholder="email"
                        name="email" 
                        value={state.email} 
                        onChange={onChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="">
                        <Form.Control 
                        required 
                        type="password" 
                        placeholder="password"
                        name="password" 
                        value={state.password} 
                        onChange={onChange} />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group controlId="">
                        <Form.Control 
                        required 
                        type="password" 
                        placeholder="password again"
                        name="password2" 
                        value={state.password2} 
                        onChange={onChange} />
                    </Form.Group>
                </Row>
                <Button className="contact-us-btn" type="submit">Send message  &#10140;</Button>
            </Form>
        </div>
    )
}

export default RegisterPage
