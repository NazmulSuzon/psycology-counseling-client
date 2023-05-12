import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "react-query";

const MyAppointment = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings =[]} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

  return (
    <div className="ml-5">
      <h3 className="text-3xl font-bold my-7 text-secondary">My Appointment</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-white">
              <th className="bg-neutral"></th>
              <th className="bg-neutral">Name</th>
              <th className="bg-neutral">Treatment</th>
              <th className="bg-neutral">Date</th>
              <th className="bg-neutral">Time</th>
            </tr>
          </thead>

          <tbody className="font-bold text-black">
            {bookings.map((booking, i) =>
            <tr key={booking._id}>
              <th>{i+1}</th>
              <td>{booking.patient}</td>
              <td>{booking.treatment}</td>
              <td>{booking.appointmentDate}</td>
              <td>{booking.slot}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
