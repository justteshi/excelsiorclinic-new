import React,{useState, useEffect} from 'react'
import axios from 'axios'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import VideoSection from '../HomePage/VideoSection'


const NewsPage = () => {
    const [news, setNews] = useState([])
    const [open, setOpen] = useState(false)
    const firstThreeNews = news.slice(0,3)
    const secondThreeNews = news.slice(3,6)


    useEffect(() => {
        document.title = "News"
        axios.get('/api/news/')
        .then(response => {
            setNews(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const getDateFormat = (date) => {
        const newDate = new Date(date)
        return newDate.toDateString()
    }

    const style ={
        marginTop: "2em",
        marginBottom: "2em",
    }
    return (
        <>
            <div className="news-cover-img">
                <h1 className="feedback-heading-one" style={{color:"white",}}>News</h1>
                <h5 className="feedback-heading-two" style={{color:"white",}}>Home / News</h5>
            </div>
            <div className="container" style={style}>
                <div className="article-wrapper" style={{height:""}}>
                    <Carousel  showStatus={false} showThumbs={false} infiniteLoop={true} dynamicHeight={false}>
                        {firstThreeNews.map(article => (
                            <div key={article.id} className="new">
                                <div className="article-img" style={{height:"600px", backgroundImage:`url(${article.cover_image})`, borderRadius:"5px"}}></div>
                                <p className="article-date"><strong>{getDateFormat(article.created_at)}</strong></p>
                                <h2 className="article-title">{article.title}</h2>
                                <p className="article-text">{article.text}</p>

                                <Link  
                                    className="article-btn">
                                    Learn more  &#10140;
                                </Link>

                                <hr style={{background:"lightgrey", marginTop: "2em"}} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="article-wrapper" style={{height:""}}>
                    <Carousel  showStatus={false} showThumbs={false} infiniteLoop={true} dynamicHeight={false}>
                        {secondThreeNews.map(article => (
                            <div key={article.id} className="new">
                                <div className="article-img" style={{height:"600px", backgroundImage:`url(${article.cover_image})`,borderRadius:"5px"}}></div>
                                <p className="article-date"><strong>{getDateFormat(article.created_at)}</strong></p>
                                <h2 className="article-title">{article.title}</h2>
                                <p className="article-text">{article.text}</p>
                                
                                <Link className="article-btn">
                                    Learn more  &#10140;
                                </Link>

                                <hr style={{background:"lightgrey", marginTop: "2em"}} />
                            </div>
                        ))}
                    </Carousel>
                </div>
                <div className="between-news" style={{height:"160px", borderRadius:"5px",background:"#00a6ce",marginBottom: "3em"}}>
                    
                    <h2 style={{color:"white", fontWeight:"bold",padding:"1em 1em 0.5em 1em"}}>
                        <FontAwesomeIcon icon={faLink} style={{marginRight:"0.5em"}} /> 
                        Some heading text herer here h reraed
                    </h2>
                    <div className="between-news-social">
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faFacebookSquare} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>

                <hr style={{background:"lightgrey", marginTop: "2em"}} />

                <div className="" style={{height: "1000px",marginTop: "3em", marginBottom: "2em"}}>
                    <iframe src='https://www.youtube.com/embed/lR2XfZ755Qs'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        className="video-wrapper"
                    />
                    
                    <div className="-heading meet-our-doctors">
                        <h1>Our</h1> 
                        <h1>Clinic</h1>
                    </div>
                    <p className="video-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, suscipit pariatur quos atque voluptas explicabo beatae quia sunt esse inventore sint odit recusandae similique dolores est necessitatibus quo totam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, suscipit pariatur quos atque voluptas explicabo beatae quia sunt esse inventore sint odit recusandae similique dolores est necessitatibus quo totam.
                    </p>
                    <Link className="video-btn" to="/">Read more  &#10140;</Link>
                </div>

            </div>
        </>
    )
}

export default NewsPage
