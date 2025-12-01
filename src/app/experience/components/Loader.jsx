import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import ButtonWtsp from "@/components/ButtonWtsp";
import Experience from "./Experience";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"/fr/experience"} change={true} />
      <Experience />
      <Footer />
      <div className="fixed bottom-7 right-6 text-riad_primary z-50">
        <ButtonWtsp />
      </div>
    </div>
  );
};

export default Loader;
