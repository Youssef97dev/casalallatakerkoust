import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Hero from "./Hero";
import Content from "./Content";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr/lalla-takerkoust-activities"} />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Loader;
