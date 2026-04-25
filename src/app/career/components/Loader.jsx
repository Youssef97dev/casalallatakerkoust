import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Career from "./Career";

const Loader = () => {
  return (
    <div className="relative">
      <Navbar path={"#"} change={true} />
      <div className="py-2 lg:py-10"></div>
      <Career />
      <Footer />
    </div>
  );
};

export default Loader;
