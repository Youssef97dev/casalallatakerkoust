import React from "react";
import Link from "next/link";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 pt-28 px-4 lg:px-56">
      <h1 className="text-[35px] leading-[45px] text-center tracking-[2px] text-salama_text font-canela text-casa_scarlet mb-2 px-10">{`Reservation`}</h1>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Passez une journée à Casa Lalla Takerkoust`}</p>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Détendez-vous dans nos jardins paisibles, profitez de notre view panoramique sur le lac Lalla Takerkoust et savourez un délicieux déjeuner farm-to-table préparé avec des produits locaux frais.`}</p>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Ouvert tous les jours de 13h à 17h, c'est l'endroit idéal pour déjeuner à toute heure.`}</p>
      <Link
        href="/fr/booking"
        className={`tracking-[0.2em] mt-2 uppercase text-[11px] font-medium  py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full hover:bg-casa_scarlet hover:text-casa_background`}
      >
        Résérvations
      </Link>
    </div>
  );
};

export default Intro;
