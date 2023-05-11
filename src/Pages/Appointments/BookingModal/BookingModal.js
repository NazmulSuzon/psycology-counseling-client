import { format } from "date-fns";
import React from "react";
// import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { name, slots } = treatment; //treatment is appointment option
  const date = format(selectedDate, "PP");

  const handleBooking = event => {
    event.preventDefault();
    const from = event.target;
    const slot = from.slot.value;
    const names = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: names,
      slot,
      email,
      phone
    }

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast
    console.log(booking);
    setTreatment(null)
  }

  return (
    <>
      <div className="text-black">
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <label htmlFor="booking-modal" className="cursor-pointer modal ">
          <label className="relative modal-box" htmlFor="">
            <h3 className="text-lg font-bold">{name}</h3>
            <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-6">
              <input
                type="text"
                value={date}
                className="w-full font-bold border input border-neutral"
              />
              <select name="slot" className="w-full border select border-neutral" required>
                {
                  slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                }
              </select>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border input border-neutral"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full border input border-neutral"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full border input border-neutral"
                required
              />
              <input
                className="w-full text-white btn btn-primary hover:btn-secondary hover:text-white"
                type="submit"
                value="Submit"
              />
            </form>
          </label>
        </label>
      </div>
    </>
  );
};

export default BookingModal;
