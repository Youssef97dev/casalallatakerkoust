import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonWtsp from "@/components/ButtonWtsp";
import Intro from "./Intro";
import Gallery from "./Gallery";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr/day-pass"} change={true} />
      <Intro />
      <Gallery />
      <Footer />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
