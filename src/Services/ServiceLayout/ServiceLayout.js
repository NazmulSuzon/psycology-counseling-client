import React from "react";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import ServiceHeader from "../ServiceHeader/ServiceHeader";
import Services from "../Services/Services";
import Footer from "../../Pages/Shared/Footer/Footer";

const ServiceLayout = () => {
  return (
    <div>
      <Navbar />
      <ServiceHeader />
      <Services/>
      <Footer/>
    </div>
  );
};

export default ServiceLayout;
