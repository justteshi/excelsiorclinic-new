import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getFeedbacks, addFeedback } from '../../actions/feedbacks'
import { clearErrors } from '../../actions/errors'

import { Card } from 'react-bootstrap/'
import { Form, Row, Col, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import FeedbackAlerts from './FeedbackAlerts'

const FeedbackPage = (props) => {
    
    const [validated, setValidated] = useState(false)
    const [state, setState] = useState({
        title: "",
        stars: "",
        message: "",
        user: "test"
    })
    // const csrftoken = Cookies.get('csrftoken');
    

    useEffect(() => {
       document.title = "Feedback"
       props.getFeedbacks()
       return () => {
           props.clearErrors()
       }
    }, [])
    
    console.log(props)
    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }
    const clearFields = () => {
        setState({
            ...state,
            title: "",
            stars: "",
            message: "",
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {title, stars, message, user} = state
        const feedback = {title, stars, message, user}
        console.log(feedback)
        props.addFeedback(feedback)
        clearFields()
    }

    const getDateFormat = (date) => {
        const newDate = new Date(date)
        return newDate.toDateString()
    }

    const showRatingToStars = (rating) => {
        const stars = []
        for (let i = 0; i < rating; i++) {
            stars.push(
                <FontAwesomeIcon className="service-tap-par-icoon"  icon={faStar} />
            )
        }
        return stars    
        
    }

    return (
        <>
            <FeedbackAlerts />  
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
                                    value={state.title}
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
                                    placeholder="Rate us 1-5" 
                                    name="stars" 
                                    value={state.stars}
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
                                value={state.message}
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
                                <div className="feedback-stars" style={{display: "flex", justifyContent: "center"}}> 
                                    {showRatingToStars(article.stars)}
                                </div>
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
    clearErrors: PropTypes.func.isRequired,
    feedbacks: PropTypes.array.isRequired,
    getFeedbacks: PropTypes.func.isRequired,
    addFeedback: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    feedbacks: state.feedbacks.feedbacks
})

export default connect(mapStateToProps, { getFeedbacks, addFeedback, clearErrors })(FeedbackPage)
