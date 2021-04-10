import React from 'react'
import axios from 'axios'

import ChooseUsSection from './ChooseUsSection'
import FourIconsSection from './FourIconsSection'
import DoctorsSection from './DoctorsSection';
import CaroselSection from './CaroselSection';
import HealthServiceSection from './HealthServiceSection'
import VideoSection from './VideoSection';
import WriteUsSection from './WriteUsSection';


const HomePage = (props) => {
    
    axios.get('/api/users', {
        "Content-type": "application.json"
    })
    .then( response => {
        console.log(response.data[0])
    })
    .catch( err => {
        console.log(err)
    })

    return (
        <div className="">
            {/* <h1 style={{textAlign: 'center'}}>Home Page</h1> */}
            <CaroselSection />
            <ChooseUsSection />
            <FourIconsSection />
            <DoctorsSection />
            <HealthServiceSection />
            <VideoSection />
            <WriteUsSection />
        </div>
    )
}

export default HomePage
