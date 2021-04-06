import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'



const HomePage = (props) => {

    return (
        <div className="">
            <h1 style={{textAlign: 'center'}}>Home Page</h1>
            <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} dynamicHeight={true}>
                <div>
                    <img src="../../../static/images/carosel_image1.jpg" /> 
                    <h1 className="heading-one">EXCELSIOR CLINIC</h1>
                    <h3 className="heading-two">The attention you deserve!</h3>
                    <Link to="/services" className="view-btn">
                        View more  &#10140;
                    </Link>

                </div>
                <div>
                    <img src="../../../static/images/carosel_image2.jpg" />
                    <h1 className="heading-one">EXCELSIOR CLINIC</h1>
                    <h3 className="heading-two">The attention you deserve!</h3>
                    <Link to="/services" className="view-btn">
                        View more  &#10140;
                    </Link>

                </div>
                <div>
                    <img src="../../../static/images/carosel_image3.jpg" />
                    <h1 className="heading-one">EXCELSIOR CLINIC</h1>
                    <h3 className="heading-two">The attention you deserve!</h3>
                    <Link to="/services" className="view-btn">
                        View more  &#10140;
                    </Link>
                    
                </div>
            </Carousel>
            
            
        </div>
    )
}

export default HomePage
