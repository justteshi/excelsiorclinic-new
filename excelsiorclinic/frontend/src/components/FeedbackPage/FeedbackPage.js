import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap/'
import { Form, Row, Col, Button, FormGroup} from 'react-bootstrap'

const FeedbackPage = () => {
    const [articles, setArticles] = useState([])
    const [title, setTitle] = useState("")
    const [raiting, setRaiting] = useState("")
    const [message, setMessage] = useState("")
    const [user, setUser] = useState("test")
    const [validated, setValidated] = useState(false)
    const csrftoken = Cookies.get('csrftoken');
    
    useEffect(() => {
        // const options = {
        //     "Content-type": "applicaon/json"
        // }
        axios.get('/api/articles/')
        .then( response => {
            setArticles(response.data.reverse())
        })
        .catch( err => console.log(err))
    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        event.preventDefault();
        setValidated(true);
        console.log([title,raiting, message, user])
        const article = {
            title: title,
            message: message,
            stars: raiting,
            user: user
        }
        const headers = {
            'X-CSRFToken': csrftoken
        }
        axios.post('/api/articles/', article, {
            headers: headers
        })
        .then(response => {
            console.log(response)
            console.log(response.data)
            axios.get('/api/articles/')
            .then( response => {
                setArticles(response.data.reverse())
                setTitle("")
                setRaiting("")
                setMessage("")
            })
            .catch( err => console.log(err))
        })
        .catch( err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="feedback-cover-img">
                    <h1 className="feedback-heading-one">Feedback</h1>
                    <h5 className="feedback-heading-two">Home / Feedback</h5>
            </div>
            <div className="">
                <div className="feedback-form-wrapper" style={{width: "100%", margin: "0 auto", background:"#00a6ce"}}>
                    <h1 style={{textAlign: "center", padding:"1em 0 1em 0", color: "white"}}>Give us Feedback</h1>
                    <Form className="feedback-form" noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Control required type="text" placeholder="Title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Control min={1} max={5} required type="number" placeholder="Raiting 1-5" value={raiting} onChange={(e) => {setRaiting(e.target.value)}} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group controlId="">
                                <Form.Control required rows="2" as="textarea" type="text" placeholder="Message" value={message} onChange={(e) => {setMessage(e.target.value)}} />
                            </Form.Group>
                        </Row>
                        <Button className="form-btn" type="submit">Submit  &#10140;</Button>
                    </Form>
                </div>
                <h1 style={{textAlign: "center", margin:"1em 0 1em 0",}}>Customers Feedback</h1>
                {articles.map(article => (
                    <div className="container" style={{display: "flex", justifyContent: "center"}}>
                        <Card key={article.id} className="text-center" style={{width: "60%", border: "1px solid black", margin: "5px"}}>
                            <Card.Header style={{ background: "#00a6ce", color: "white", fontWeight: "bold"}}>{article.title}</Card.Header>
                            <Card.Body>
                                <Card.Text style={{fontStyle: "italic"}}>
                                - "{article.message}"
                                </Card.Text>
                                <Card.Text >
                                Rating: {article.stars} / 5
                                </Card.Text>
                                
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                <div>user : {article.user}</div>
                                <div>date : {article.creted_at}</div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}

export default FeedbackPage
