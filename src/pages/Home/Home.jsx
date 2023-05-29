import React from 'react'
import Hero from '../../components/section/Hero/Hero'
import { hero, liveAuction, collection, howItWorks, creator } from '../../data';
import classes from './home.module.scss'
import Collection from '../../components/section/Collection/Collection';
import HowItWorks from '../../components/section/HowItWorks/HowItWorks';
import Creator from '../../components/section/Creator/Creator';
import LiveAuction from '../../components/section/LiveAuction/LiveAuction';



const Home = () => {
    
    return (
        <div className={classes.home}>
            <Hero data={ hero }/>
            <LiveAuction data={ liveAuction } />
            <Collection data={ collection }/>
            <HowItWorks data={ howItWorks } />
            <Creator data={ creator } /> 
        </div>
    )
}

export default Home