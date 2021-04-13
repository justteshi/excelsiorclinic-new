import React from 'react'
import Gallery from 'react-grid-gallery'
import { render } from 'react-dom'

const GalleryPage = () => {

    const IMAGES = [
        {
            src: "../../../static/images/gallery/gallery1.jpg",
            thumbnail: "../../../static/images/gallery/gallery1.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 250
        },
        {
            src: "../../../static/images/gallery/gallery2.jpg",
            thumbnail: "../../../static/images/gallery/gallery2.jpg",
            thumbnailWidth: 450,
            thumbnailHeight: 250,
            caption: "Boats (Jeshu John - designerspics.com)"
        },
        {
            src: "../../../static/images/gallery/gallery3.jpg",
            thumbnail: "../../../static/images/gallery/gallery3.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 250
        },
        {
            src: "../../../static/images/gallery/gallery4.jpg",
            thumbnail: "../../../static/images/gallery/gallery4.jpg",
            thumbnailWidth: 450,
            thumbnailHeight: 300
        },
        {
            src: "../../../static/images/gallery/gallery5.jpg",
            thumbnail: "../../../static/images/gallery/gallery5.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 250
        },
        {
            src: "../../../static/images/gallery/gallery6.jpg",
            thumbnail: "../../../static/images/gallery/gallery6.jpg",
            thumbnailWidth: 450,
            thumbnailHeight: 250
        },
        {
            src: "../../../static/images/gallery/gallery7.jpg",
            thumbnail: "../../../static/images/gallery/gallery7.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 250
        },
        {
            src: "../../../static/images/gallery/gallery8.jpg",
            thumbnail: "../../../static/images/gallery/gallery8.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 250
        },
        {
            src: "../../../static/images/gallery/gallery9.jpg",
            thumbnail: "../../../static/images/gallery/gallery9.jpg",
            thumbnailWidth: 350,
            thumbnailHeight: 250
        },
        {
            src: "../../../static/images/gallery/gallery10.jpg",
            thumbnail: "../../../static/images/gallery/gallery10.jpg",
            thumbnailWidth: 500,
            thumbnailHeight: 350
        }

    ]

    const style = {
        height: "1200px",
        marginBottom: "4em",
        marginTop: "2em"
    }

    return (
        <>
            <div className="gallery-cover-img">
                <h1 className="feedback-heading-one" style={{color:"white"}}>Gallery</h1>
                <h5 className="feedback-heading-two" style={{color:"white"}}>Home / Gallery</h5>
            </div>
            <div className="galery container" style={style}>
                <hr style={{background:"black"}}></hr>
                <Gallery images={IMAGES} enableImageSelection={true} margin={3} rowHeight={300}/>
            </div>
        </>
    )
}

export default GalleryPage
