import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const MyAppointment = () => {
    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const {data: bookings = []} = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () =>{
            const res = await fetch(url, {
              headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
    })

  return (
    <div>
      <h3 className="my-6 text-3xl font-bold text-secondary">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date Color</th>
              <th>Time</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody className="font-bold text-black">
            {
                bookings.map((booking, i) => <tr key={booking._id}>
                    <th>{i+1}</th>
                    <td>{booking.patient}</td>
                    <td>{booking.treatment}</td>
                    <td>{booking.appointmentDate}</td>
                    <td>{booking.slot}</td>
                    <td>
                    {
                      booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                        <button
                        className="text-white btn btn-sm btn-secondary"
                        >Pay</button>
                      </Link>
                    }
                    {
                      booking.price && booking.paid && <span
                        className="text-primary"
                      >Paid</span>
                    }
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
