import React,{
    useState,
    useEffect
} from 'react'
import { Form, Row, Col, Button} from 'react-bootstrap'


const LoginPage = () => {
    const [state, setState] = useState({
        username: "",
        password: "",

    })

    useEffect(() => {
        document.title = "Login"
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
            password: "",
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = state
        const contact = {username, password}
        console.log(state)
        //props.addContact(contact)
        clearFields()
    }

    return (
        <div style={{width: "30%", margin:"auto"}} className="container">
            <div className="choose-us-headng">
                <h1>Login</h1> 
                <h1></h1>
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
                        type="text" 
                        placeholder="password"
                        name="password" 
                        value={state.password} 
                        onChange={onChange} />
                    </Form.Group>
                </Row>
                <div style={{display:"flex", justifyContent:"center"}}>
                    <Button className="contact-us-btn" type="submit">Send message  &#10140;</Button>
                    <p style={{margin:"auto"}}>Dont have an account ? <a style={{color: "#00a6ce", }} href="/sign-up"> Sign up</a></p>
                </div>
            </Form>
        </div>
    )
}

export default LoginPage
