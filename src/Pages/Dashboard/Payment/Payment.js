import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from '../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;

  if(navigation.state === "loading"){
    return <Loading/>
  }

  return (
    <div>
      <h3 className="my-6 text-3xl font-bold text-secondary">
        Payment for {treatment}
      </h3>
      <p className="text-xl font-bold text-black">
        Please pay <span className="text-primary">${price}</span> for your
        appointment on {appointmentDate} at {slot}.{" "}
      </p>
      <div className="py-8 mt-6 text-white shadow-xl bg-primary card w-96">
        <div className="card-body">
            <Elements stripe={stripePromise}>
                <CheckoutForm booking={booking}/>
            </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
