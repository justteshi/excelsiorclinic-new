import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const NewsPage = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get('/api/news/')
        .then(response => {
            setNews(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    const style ={
        marginTop: "2em",
        marginBottom: "2em"
    }
    return (
        <>
            <div className="news-cover-img">
                <h1 className="feedback-heading-one" style={{color:"white",}}>News</h1>
                <h5 className="feedback-heading-two" style={{color:"white",}}>Home / News</h5>
            </div>
            <div className="container" style={style}>
                {news.map(article => (
                    <>
                        <hr style={{background: "black"}}></hr>
                        <Card key={article.map} style={{margin: "auto"}}>
                            <Card.Img variant="top" src={article.cover_image} />
                            <Card.Body>
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Text>
                                    {article.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </>
                ))}
            </div>
        </>
    )
}

export default NewsPage
