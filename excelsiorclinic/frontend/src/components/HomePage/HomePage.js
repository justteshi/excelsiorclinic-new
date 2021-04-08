import React from 'react'


import ChooseUsSection from './ChooseUsSection'
import FourIconsSection from './FourIconsSection'
import DoctorsSection from './DoctorsSection';
import CaroselSection from './CaroselSection';
import HealthServiceSection from './HealthServiceSection'
import VideoSection from './VideoSection';

const HomePage = (props) => {

    return (
        <div className="">
            {/* <h1 style={{textAlign: 'center'}}>Home Page</h1> */}
            <CaroselSection />
            <ChooseUsSection />
            <FourIconsSection />
            <DoctorsSection />
            <HealthServiceSection />
            <VideoSection />
        </div>
    )
}

export default HomePage
