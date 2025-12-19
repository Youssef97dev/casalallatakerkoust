import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center gap-5 text-center px-3 lg:px-40 text-casa_black py-20"
    >
      <h1 className="text-[27px] italic leading-[40px] font-lora">
        {
          "Casa Lalla est un espace où les visiteurs peuvent manger, boire et célébrer"
        }
      </h1>
      <h2 className="italic text-[19px] leading-[32.5px] font-lora">
        {
          "Mettant en avant notre restaurant emblématique Casa Lalla, où l’élégance méditerranéenne rencontre la tranquillité du lac."
        }
      </h2>
      <p className="text-[15px] leading-[25.5px] font-light italic pt-5 px-0 lg:px-52">
        {
          "Casa lalla accueille ses hotes Loin de la sophistication et du tumulte de la ville, ce havre de paix est l’endroit rêvé pour se laisser aller aux plaisirs simples et savourer la douceur du climat."
        }
        <br />
        {
          "La décoration mêle souvenirs et héritage dans une atmosphère simple et décalée où plane un doux parfum de formentera ibiza mykonos."
        }
      </p>
      <Link
        href="/fr/reservation"
        className={`tracking-[0.2em] mt-2 uppercase text-[11px] font-medium  py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full hover:bg-casa_scarlet hover:text-casa_background`}
      >
        Réservation
      </Link>
    </section>
  );
};

export default About;
