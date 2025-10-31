import React from "react";
import Link from "next/link";

const AboutTwo = () => {
  return (
    <section
      id="about_two"
      className="w-full flex flex-col justify-center items-center gap-5 text-center px-3 lg:px-40 text-casa_black py-20"
    >
      <h1 className="text-[35px] leading-[42px] font-canela">
        {
          "Casa Lalla Takerkoust — Entre charme du lac et atmosphère du désert d’Agafay"
        }
      </h1>
      <h2 className="italic text-[25px] leading-[32.5px] font-canela">
        {"Être au bon endroit au bon moment"}
      </h2>
      <p className="text-[15px] leading-[25.5px] font-light italic pt-5 px-0 lg:px-52">
        {
          "Laissez-vous porter par l’énergie magnétique des esprits libres, des rires, des conversations, des amitiés et des ondes revitalisantes de CASA LALLA TAKERKOUST, un lieu inspiré par la culture méditerranéenne et le minimalisme moderne."
        }
      </p>
      <div className="h-[2px] w-14 bg-casa_scarlet mx-auto my-4"></div>
      <Link
        href="/fr/booking"
        className={`tracking-[0.2em] mt-2 uppercase text-[11px] font-medium  py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full hover:bg-casa_scarlet hover:text-casa_background`}
      >
        Réservation
      </Link>
    </section>
  );
};

export default AboutTwo;
