import React from 'react';
import { Box } from "@mui/material";
import './features.css'
import lappy from "../../assets/images/landinglappy.png"
import mobile from "../../assets/images/landingmobile.png"

const FeaturesBottom = () => {
    return (<section >
        <Box mt={10} className={'featuresContainer'}>
            <section className={'leftFeaturesContainer'} >
                <div>
                    <img className="landingLappy" src={lappy} />
                </div>
                <div>
                    <img className="landingMobile" src={mobile} />
                </div>
            </section>
            <section style={{ margin: 0 }} className={'rightFeaturesContainer'}>
                <h1 className={'headerFeat'}>Book and Bid with a single click</h1>
                <h3 style={{ color: '#a6a6a6', fontWeight: '500', lineHeight: '40px' }}>Streamline your bookings with Book Now and Bid funcitonality. No more phone calls or emails. With a single click you can book or bid on loads all within freightdok.</h3>
            </section>
        </Box>
    </section>)
}



const FeaturesTop = () => {
    return (<section >
        <Box mt={15} className={'featuresContainer'}>
            <section className="leftCommonCSS" >
                <h1 className={'headerFeat'}>Finding freight, made easy</h1>
                <h3 style={{ paddingLeft: '2.5rem', color: '#a6a6a6', fontWeight: '500', width: '75%' }}>Today, truckers spend hours of their day sourcing freight. We've made it our goal to change that by helping truckers find loads without having to search through hundreds of load boards.
                </h3>
            </section>
            <section className="rightCommonCSS" >
                <h1 style={{ paddingLeft: '0.5rem' }}>Automate your sourcing </h1>
                <h3 style={{ paddingLeft: '0.5rem', color: '#a6a6a6', fontWeight: '500' }}>Interact with hundreds of loads sourced from various freight brokers all within freightdok desktop and mobile apps. </h3>

                <h1 style={{ paddingLeft: '0.5rem' }}>Schedule Optimization </h1>
                <h3 style={{ paddingLeft: '0.5rem', color: '#a6a6a6', fontWeight: '500' }}>Build a schedule that keeps your wheels turning. Increase utlization while decreasing deadhead. </h3>

                <h1 style={{ paddingLeft: '0.5rem' }}>Real Loads </h1>
                <h3 style={{ paddingLeft: '0.5rem', color: '#a6a6a6', fontWeight: '500' }}>No more fake, booked, or duplicate loads. freightdok automatically fetches loads that are open to book and bid in real time.

                </h3>

            </section>
        </Box>
    </section>)
}





const FeaturesFinal = () => {

    return (<section >
        <Box mt={15} className={'featuresContainer'}>
            <section className="leftCommonCSS"  >
                <h1 className={'headerFeat'}>Automate back office tasks </h1>
                <h3 style={{ paddingLeft: '2.5rem', color: '#a6a6a6', fontWeight: '500', width: '70%' }}>We know you're busy. That's why we created freightdok to help you save time and money with automated back office tasks.</h3>
            </section>
            <section className="rightCommonCSS" >
                <h1 style={{ paddingLeft: '0.5rem' }}>Upload Documents </h1>
                <h3 style={{ paddingLeft: '0.5rem', color: '#a6a6a6', fontWeight: '500' }}>Once load is delivered upload poof of delivery right from your phone. </h3>

                <h1 style={{ paddingLeft: '0.5rem' }}>One Click Invoices

                </h1>
                <h3 style={{ paddingLeft: '0.5rem', color: '#a6a6a6', fontWeight: '500' }}>You're too busy to send out invoices manually. Create invocies with just one click. </h3>

                <h1 style={{ paddingLeft: '0.5rem' }}>Capture Data </h1>
                <h3 style={{ paddingLeft: '0.5rem', color: '#a6a6a6', fontWeight: '500' }}>
                    No more manually writing down facility hours, emailing in/out times, or handling check calls. We will capture your data automatically so you can have it at your fingertips.
                </h3>

            </section>
        </Box>
    </section>)
}


const Footer = () => {
    return (<footer className="footerMain">
        <div className="foot" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>Copyright &#169; 2022.  freightdok</p>
            <p>Indianapolis, Indiana</p>
            <p>Terms of Use
            </p>
            <p style={{ marginRight: '2rem' }}>Privacy Policy
            </p>
        </div>
    </footer>
    )
}


const Features = () => {
    return (<div className="featuresMainContainer">
        <FeaturesTop />
        <FeaturesBottom />
        <FeaturesFinal />
        <Footer />
    </div>)
}



export default Features
