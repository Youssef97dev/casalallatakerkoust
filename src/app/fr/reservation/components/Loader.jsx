import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ButtonWtsp from "@/components/ButtonWtsp";
import Intro from "../../day-pass/components/Intro";
import Gallery from "../../day-pass/components/Gallery";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/day-pass"} change={true} />
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
