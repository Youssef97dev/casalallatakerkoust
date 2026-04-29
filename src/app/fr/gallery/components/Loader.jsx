import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React from "react";
import Gallery from "./Gallery";
import ButtonWtsp from "@/components/ButtonWtsp";
import Hero from "./Hero";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/lalla-takerkoust-gallery"} />
      <Hero />
      <Gallery />
      <Footer />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
