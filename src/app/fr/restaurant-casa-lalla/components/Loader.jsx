import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import Content from "./Content";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/retaurant-casa-lalla"} />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
};

export default Loader;
