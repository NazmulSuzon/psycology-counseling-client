import React from "react";
import img from "../../../images/marriage-counselor-taking-notes-while-having-meeting-with-couple-office.jpg";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  

  return (
    <header className="my-6">
      <div className="hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={img}
            alt="mental therapy"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-6 text-black ">
            <DayPicker
             styles={{fontWeight:'bolder'}}
              mode="single"
              showOutsideDays
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
