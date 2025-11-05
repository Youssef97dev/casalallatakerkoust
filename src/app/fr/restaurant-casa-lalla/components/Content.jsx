import React from "react";
import Link from "next/link";

const Content = () => {
  return (
    <section
      id="our-philosophy"
      className="w-full flex flex-col justify-center items-center gap-4 py-24 lg:py-32 px-5 lg:px-80 text-center"
    >
      <h1 className="font-canela text-[40px] leading-[42px] text-casa_black">
        Notre Philosophie
      </h1>
      <h2 className="font-lora text-[18px] leading-[32.5px] text-casa_black italic">
        Le restaurant Casa Lalla Takerkoust vous invite à un voyage au cœur de
        la riche culture culinaire et des saveurs vibrantes de la Méditerranée.
      </h2>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black mt-8 px-0 lg:px-14">
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla Takerkoust
        </strong>{" "}
        est une destination culinaire unique et haut de gamme, située dans le
        cadre pittoresque du <strong>Barrage Lalla Takerkoust</strong>. Offrant
        une combinaison de{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          cuisine marocaine traditionnelle
        </strong>{" "}
        et de{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          cuisine internationale
        </strong>
        , le restaurant propose un menu savoureux dans un cadre à la fois{" "}
        <strong>décontracté</strong> et <strong>stylé</strong>. Avec un accent
        sur des ingrédients frais et locaux,{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla Takerkoust
        </strong>{" "}
        offre une{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          expérience culinaire authentique
        </strong>{" "}
        mettant en valeur le meilleur des saveurs de la région.
      </p>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14">
        En tant que <strong>lounge bar</strong>,{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla Takerkoust
        </strong>{" "}
        offre le{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          lieu idéal
        </strong>{" "}
        pour se détendre et <strong>profiter entre amis</strong>, en{" "}
        <strong>famille</strong> ou entre <strong>collègues</strong>.
        L’établissement propose une large sélection de{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          cocktails
        </strong>{" "}
        soigneusement élaborés, de{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          vins de prestige
        </strong>{" "}
        {`et d’autres boissons, le tout servi dans une`}{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          ambiance sophistiquée et accueillante
        </strong>
        .
      </p>
      <Link
        href="/fr/booking"
        className={`mt-5 tracking-[0.2em] text-[11px] font-medium uppercase py-2.5 px-4 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet hover:bg-casa_scarlet hover:text-casa_background rounded-full`}
      >
        Réservation
      </Link>
    </section>
  );
};

export default Content;
