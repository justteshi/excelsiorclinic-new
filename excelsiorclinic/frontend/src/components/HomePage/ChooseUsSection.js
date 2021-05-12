import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

const ChooseUsSection = () => {
    const style ={
        height: "600px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "8em"
    }
    const progressBarsValues = {
        goodStaff: 80,
        modernMachinery: 70,
        consultant: 95,
        service: 72
    }

    return (
        <div style={style} className="container">
            <div className="choose-us-left">
                {/* <img src="../../../static/images/why_choose_us.jpg" /> */}
            </div>
            <div className="choose-us-right">
                <div className="styled-heading choose-us">
                    <h1>Why</h1> 
                    <h1>Choose</h1>
                    <h1>Us</h1>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod mollitia suscipit dicta quisquam saepe a excepturi corporis veniam nihil adipisci aut sunt, quas corrupti? Labore repudiandae minima esse officiis.</p>
                <div className="progress-bars">
                    <div className="progress-info">
                        <p style={{width: `${progressBarsValues.goodStaff - 2}%`}}>Good Staff</p>
                        <span className="percentage">{`${progressBarsValues.goodStaff}%`}</span>
                    </div>
                    <ProgressBar now={progressBarsValues.goodStaff} />
                    
                    <div className="progress-info">
                        <p style={{width: `${progressBarsValues.modernMachinery - 2}%`}}>Modern Machinery</p>
                        <span className="percentage">{`${progressBarsValues.modernMachinery}%`}</span>
                    </div>
                    <ProgressBar now={progressBarsValues.modernMachinery}/>

                    <div className="progress-info">
                        <p style={{width: `${progressBarsValues.consultant - 2}%`}}>An enthusiastic consultant</p>
                        <span className="percentage">{`${progressBarsValues.consultant}%`}</span>
                    </div>
                    <ProgressBar now={progressBarsValues.consultant}/>

                    <div className="progress-info">
                        <p style={{width: `${progressBarsValues.service - 2}%`}}>Great service</p>
                        <span className="percentage">{`${progressBarsValues.service}%`}</span>
                    </div>
                    <ProgressBar now={progressBarsValues.service}/>
                </div>
            </div>
        </div>
    )
}

export default ChooseUsSection
