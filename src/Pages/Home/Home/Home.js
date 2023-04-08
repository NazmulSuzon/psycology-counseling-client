import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import MentalFitness from '../MentalFitness/MentalFitness';
import Treatments from '../Treatments/Treatments';
import CounselorAppointment from '../CounselorAppointment/CounselorAppointment';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <ServiceCard/>
            <MentalFitness/>
            <Treatments/>
            <CounselorAppointment/>
        </div>
    );
};

export default Home;