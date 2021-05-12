import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const VideoSection = () => {
    const style = {
        height: "1000px",
        background: "",
        marginTop: "4em",
        marginBottom: "4em"
    } 
    return (
        <div className="container" style={style}>
            <iframe src='https://www.youtube.com/embed/lR2XfZ755Qs'
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                className="video-wrapper"
            />
            {/* <div className="video-wrapper">
                <div className="play-btn">
                    <FontAwesomeIcon icon={faPlay} size="3x"/>
                </div>
            </div> */}
            <div className="styled-heading gray-logo video-heading">
                        <h1>Our</h1> 
                        <h1>Clinic</h1>
                </div>
            <p className="video-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, suscipit pariatur quos atque voluptas explicabo beatae quia sunt esse inventore sint odit recusandae similique dolores est necessitatibus quo totam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum, suscipit pariatur quos atque voluptas explicabo beatae quia sunt esse inventore sint odit recusandae similique dolores est necessitatibus quo totam.
            </p>
            <Link  className="video-btn" to="/">Read more  &#10140;</Link>
        </div>
    )
}

export default VideoSection
