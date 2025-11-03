import React from "react";
import Image from "next/image";
import Link from "next/link";

const Activities = () => {
  return (
    <div className="relative w-full h-[150vh] lg:h-[110vh]">
      <div className="absolute z-20 right-0 lg:right-[181px] w-[90%] lg:w-[43%] h-fit flex flex-col justify-center items-start gap-5  p-5 lg:p-10 top-[320px] lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 bg-[#EDE5D9]">
        <h1 className="font-lora text-[22px] leading-[32.4px] text-casa_black">
          Casa Lalla Takerkoust offert des expériences uniques
        </h1>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          <strong>Lalla Takerkoust</strong>
          {` n’est pas seulement une destination
          pittoresque — c’est un véritable terrain de jeu pour l’aventure et
          l’exploration. Facilement accessible en taxi ou en bus, les visiteurs
          peuvent plonger directement dans une variété `}
          <strong>{`d’activités`}</strong>
          {` palpitantes. Ressentez l’adrénaline d’un`}{" "}
          <strong>tour en Quad</strong> ou en <strong>Buggy</strong>, guidé hors
          des sentiers battus à travers les contreforts des{" "}
          <strong>Montagnes du Haut Atlas</strong>. Glissez sur le lac en{" "}
          <strong>Jet Ski</strong>
          {` tout en admirant les vues à couper le souffle
          sur les sommets enneigés. Profitez également d’une paisible`}{" "}
          <strong>promenade nature</strong>
          {` ou d’une `}
          <strong>randonnée</strong>{" "}
          {`le long des rives sereines du lac, où vous pourrez observer une flore
          et une faune uniques — idéal pour les passionnés d’ornithologie et de
          photographie.`}
        </p>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          {`Découvrez les paysages lors d’aventures à `}
          <strong>cheval</strong> ou partez explorer le{" "}
          <strong>{`désert d’Agafay`}</strong>, situé à seulement 5 minutes —
          idéal pour des excursions en <strong>quad</strong>,{" "}
          <strong>buggy</strong> ou à <strong>dos de chameau</strong>. Pour les
          passionnés de vélo, un <strong>Bike Tour</strong> à travers le{" "}
          <strong>désert</strong>
          {` mène jusqu’à l’oasis cristalline de`}{" "}
          <strong>Lalla Takerkoust</strong>, offrant un parcours inoubliable
          entouré des <strong>Montagnes du Haut Atlas</strong>. Des aventures
          sensationnelles aux escapades paisibles,{" "}
          <strong>Lalla Takerkoust</strong> promet des expériences pour tous les
          goûts.
        </p>
        <Link
          href="/fr/lalla-takerkoust-activities"
          className="font-lora italic text-[15px] leading-[25.5px] text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline"
        >
          <span className="relative z-10">Découvrez plus</span>
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
            aria-hidden="true"
          ></span>
        </Link>
      </div>
      <div className="z-10 absolute left-0 lg:left-40 w-[90%] lg:w-1/2 h-full">
        <Image
          src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761827993/lalla-takerkoust-agafay-activities-2_nbrj6p.webp"
          alt="casa lalla takerkoust, agafay vibes"
          width={500}
          height={500}
          className="object-cover h-[400px] lg:h-[110vh]"
        />
      </div>
    </div>
  );
};

export default Activities;
