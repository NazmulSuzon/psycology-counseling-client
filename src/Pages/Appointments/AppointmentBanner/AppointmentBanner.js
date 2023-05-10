import React, { useState } from "react";
import img from "../../../images/marriage-counselor-taking-notes-while-having-meeting-with-couple-office.jpg";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <header className="my-6">
      <div className="hero">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <img
            src={img}
            alt="mental therapy"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-6 text-black">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p className="font-bold text-secondary">You have selected date: {format(selectedDate, "PP")}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
