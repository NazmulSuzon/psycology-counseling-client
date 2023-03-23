import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import MentalFitness from '../MentalFitness/MentalFitness';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <ServiceCard/>
            <MentalFitness/>
        </div>
    );
};

export default Home;