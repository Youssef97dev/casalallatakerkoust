import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "./Hero";
import Booking from "./Booking";
import ButtonWtsp from "@/components/ButtonWtsp";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr/booking"} />
      <Hero />
      <Booking />
      <Footer />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
