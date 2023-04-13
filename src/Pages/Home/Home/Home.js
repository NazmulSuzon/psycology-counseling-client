import React from 'react';
import Banner from '../Banner/Banner';
import ServiceCard from '../ServiceCard/ServiceCard';
import MentalFitness from '../MentalFitness/MentalFitness';
import Treatments from '../Treatments/Treatments';
import CounselorAppointment from '../CounselorAppointment/CounselorAppointment';
import Review from '../Review/Review';
import Services from '../Services/Services';
import MoreServices from '../MoreServices/MoreServices';

const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <ServiceCard/>
            <MentalFitness/>
            <Treatments/>
            <CounselorAppointment/>
            <Review/>
            <Services/>
            <MoreServices/>
        </div>
    );
};

export default Home;