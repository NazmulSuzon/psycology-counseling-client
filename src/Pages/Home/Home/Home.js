import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import MentalFitness from '../MentalFitness/MentalFitness';
import Treatments from '../Treatments/Treatments';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <ServiceCard/>
            <MentalFitness/>
            <Treatments/>
        </div>
    );
};

export default Home;