import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React from "react";
import Hero from "./Hero";
import Booking from "./Booking";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/booking"} />
      <Hero />
      <Booking />
      <Footer />
    </div>
  );
};

export default Loader;
