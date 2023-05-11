import React from "react";

const BookingModal = ({treatment}) => {
  return (
    <>
      <div className="text-black">
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <label htmlFor="booking-modal" className="cursor-pointer modal ">
        <label className="relative modal-box" htmlFor="">
          <h3 className="text-lg font-bold">
            {treatment.name}
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
      </div>
    </>
  );
};

export default BookingModal;
