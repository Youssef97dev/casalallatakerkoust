import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Gallery from "./Gallery";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr/lalla-takerkoust-gallery"} change={true} />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Loader;
