import React from "react";

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
  const { name, slots } = appointmentOption;

  return (
    <div className="text-black border-2 shadow-md card">
      <div className="text-center card-body">
        <h2 className="text-2xl font-bold text-center text-secondary">{name}</h2>
        <p className="font-bold">{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
        <p className="font-bold">{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
        <div className="justify-center card-actions">
          <label 
            htmlFor="booking-modal" 
            className="text-white btn btn-primary hover:text-white hover:btn-secondary"
            onClick={() => setTreatment(appointmentOption)}
        >Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
