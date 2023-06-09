import { format } from 'date-fns';
import React, { useState } from 'react';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
        .then(res => res.json())
    });

    if(isLoading){
        return <Loading/>
    }

    return (
        <section className='my-16'>
            <p className='text-xl font-bold text-center text-secondary'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 gap-6 mx-16 mt-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {treatment && <BookingModal 
                selectedDate={selectedDate} 
                treatment={treatment}
                setTreatment={setTreatment}
                refetch ={refetch}
            />}
        </section>
    );
};

export default AvailableAppointments;