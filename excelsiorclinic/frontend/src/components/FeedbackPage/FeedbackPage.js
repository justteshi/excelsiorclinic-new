import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap/'

const FeedbackPage = () => {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        const options = {
            "Content-type": "applicaon/json"
        }
        axios.get('/api/articles/')
        .then( response => {
            setArticles(response.data)
        })
        .catch( err => console.log(err))
    }, [])
    return (
        <div className="container">
            {articles.map(article => (
                <Card key={article.id} className="text-center">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>
                        {article.message}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">author: {article.user}</Card.Footer>
                </Card>
            ))}
            
        </div>
    )
}

export default FeedbackPage
