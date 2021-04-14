import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getFeedbacks, addFeedback } from '../../actions/feedbacks'
import { Card } from 'react-bootstrap/'
import { Form, Row, Col, Button} from 'react-bootstrap'

const FeedbackPage = (props) => {
    
    const [validated, setValidated] = useState(false)
    const [state, setState] = useState({
        title: '',
        stars: '',
        message: '',
        user: 'test'
    })
    // const csrftoken = Cookies.get('csrftoken');
    

    useEffect(() => {
       document.title = "Feedback"
       props.getFeedbacks() 
    }, [])

    const onChange = event => {
        setState({[event.target.name]: event.target.value})
        console.log(state)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {title, stars, message, user} = state
        const feedback = {title, stars, message, user}
        console.log(feedback)
        props.addFeedback(feedback)
    }

    const getDateFormat = (date) => {
        const newDate = new Date(date)
        return newDate.toDateString()
    }
    return (
        <>
            <div className="feedback-cover-img">
                    <h1 className="feedback-heading-one">Feedback</h1>
                    <h5 className="feedback-heading-two">Home / Feedback</h5>
            </div>
            <div className="">
                <div className="feedback-form-wrapper" 
                style={{width: "100%", margin: "0 auto", background:"#00a6ce"}}>
                    <h1 style={{textAlign: "center", padding:"1em 0 1em 0", color: "white"}}>
                        Give us Feedback
                    </h1>
                    <Form 
                    className="feedback-form" 
                    noValidate 
                    validated={validated} 
                    onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Control 
                                    required 
                                    type="text" 
                                    placeholder="Title" 
                                    name="title" 
                                     
                                    onChange={onChange} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="">
                                    <Form.Control 
                                    min={1} 
                                    max={5} 
                                    required 
                                    type="number"
                                    placeholder="Raiting 1-5" 
                                    name="stars" 
                                     
                                    onChange={onChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group controlId="">
                                <Form.Control 
                                required 
                                rows="2" 
                                as="textarea" 
                                type="text" 
                                placeholder="Message" 
                                name="message" 
                                
                                onChange={onChange} />
                            </Form.Group>
                        </Row>
                        <Button className="form-btn" type="submit">
                            Submit  &#10140;
                        </Button>
                    </Form>
                </div>
                <h1 style={{textAlign: "center", margin:"1em 0 1em 0",}}>Customers Feedback</h1>
                {props.feedbacks.map(article => (
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
                                <div>{getDateFormat(article.creted_at)}</div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}
    
FeedbackPage.propTypes = {
    feedbacks: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    feedbacks: state.feedbacks.feedbacks,
    getFeedbacks: PropTypes.func.isRequired,
    addFeedback: PropTypes.func.isRequired
})

export default connect(mapStateToProps, { getFeedbacks, addFeedback })(FeedbackPage)
