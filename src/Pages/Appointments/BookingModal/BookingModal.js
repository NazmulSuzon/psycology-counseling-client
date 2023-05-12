import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
// import { toast } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { name, slots } = treatment; //treatment is appointment option
  const date = format(selectedDate, "PP");
  const {user} = useContext(AuthContext);

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
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.acknowledged){
        setTreatment(null);
        toast.success('Booking Confirmed.');
        refetch();
      }
      else{
        toast.error(data.message);
      }
    })
  }

  return (
    <>
      <div className="font-bold text-black">
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <label htmlFor="booking-modal" className="cursor-pointer modal ">
          <label className="relative modal-box" htmlFor="">
            <h3 className="text-lg font-bold">{name}</h3>
            <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 mt-6">
              <input
                type="text"
                value={date}
                className="w-full border input border-neutral"
                readOnly
              />
              <select name="slot" className="w-full border select border-neutral" required>
                {
                  slots.map((slot, i) => <option value={slot} key={i}>{slot}</option>)
                }
              </select>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Your Name"
                className="w-full border input border-neutral"
                required
              />
              <input
                type="email"
                name="email"
                defaultValue={user?.email }
                placeholder="Email Address"
                className="w-full border input border-neutral"
                required
                readOnly
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
