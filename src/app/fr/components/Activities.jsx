import React from "react";
import Image from "next/image";
import Link from "next/link";

const Activities = () => {
  return (
    // 1. Used a semantic <section> instead of a generic <> or <div>
    <section className="relative w-full flex flex-col-reverse lg:block lg:h-[125vh] items-center justify-center gap-8 lg:gap-0">
      {/* --- TEXT CONTENT --- */}
      {/* 2. Unified layout: Flexbox for mobile, Absolute positioning for desktop */}
      <div className="z-20 w-[90%] lg:w-[43%] h-fit flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-5 p-5 lg:p-10 relative lg:absolute lg:right-[181px] lg:top-1/2 lg:-translate-y-1/2 bg-transparent lg:bg-[#EDE5D9]">
        {/* 3. Only ONE <h2> tag now exists in the DOM for better SEO */}
        <h2 className="font-lora text-[27px] leading-[32.4px] text-casa_black text-center lg:text-left">
          Casa Lalla Takerkoust offert des expériences uniques
        </h2>

        {/* 4. Cleaned up unnecessary string literal concatenations */}
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black text-justify lg:text-left">
          <strong>Lalla Takerkoust</strong> {"n’est"} pas seulement une
          destination pittoresque —{"c’est"} un véritable terrain de jeu pour{" "}
          {"l’aventure et l’exploration"}. Facilement accessible en taxi ou en
          bus, les visiteurs peuvent plonger directement dans une variété{" "}
          {"d’activités"} palpitantes. Ressentez
          {"l’adrénaline"} {"d’un"} <strong>tour en Quad ou en Buggy</strong>,
          guidé hors des sentiers battus à travers les contreforts des Montagnes
          du Haut Atlas. Glissez sur le lac en Jet Ski tout en admirant les vues
          à couper le souffle sur les sommets enneigés. Profitez également{" "}
          {"d’une"} paisible promenade nature ou {"d’une"} randonnée le long des
          rives sereines du lac, où vous pourrez observer une flore et une faune
          uniques — idéal pour les passionnés {"d’ornithologie"} et de{" "}
          <strong>photographie</strong>.
        </p>

        <p className="font-light text-[15px] leading-[25.5px] text-casa_black text-justify lg:text-left">
          Découvrez les paysages lors d’aventures à cheval ou partez explorer le{" "}
          <strong>{"désert d’Agafay"}</strong>, situé à seulement 5 minutes —
          idéal pour des excursions en{" "}
          <strong>quad, buggy ou à dos de chameau</strong>. Pour les passionnés
          de vélo, un Bike Tour à travers le désert mène jusqu’à l’oasis
          cristalline de Lalla Takerkoust, offrant un parcours inoubliable
          entouré des Montagnes du Haut Atlas. Des aventures sensationnelles aux
          escapades paisibles, Lalla Takerkoust promet des expériences pour tous
          les goûts.
        </p>

        {/* 5. Added an aria-label for accessibility (boosts SEO scores) */}
        <Link
          href="/lalla-takerkoust-activities"
          className="font-lora italic text-[18px] leading-[25.5px] text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline mt-2 lg:mt-0"
          aria-label="Découvrez plus d'activités et d'expériences à Lalla Takerkoust"
        >
          <span className="relative z-10">Découvrez plus</span>
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
            aria-hidden="true"
          ></span>
        </Link>
      </div>

      {/* --- IMAGE CONTENT --- */}
      <div className="z-10 w-[90%] lg:w-[40%] h-[500px] lg:h-full relative lg:absolute lg:left-40">
        {/* 6. Used Next.js `fill` instead of hardcoded width/height to prevent layout shift and improve Core Web Vitals */}
        <Image
          src="/agafay-gallery/agafay-desert-buggy-tour-marrakech.webp"
          alt="Aventure premium en buggy dans le désert d'Agafay offrant une expérience VIP de luxe près de notre day club de style Mykonos à Marrakech"
          title="Excursion VIP en Buggy à Agafay et Expérience Day Club de Luxe"
          fill
          sizes="(max-width: 1024px) 90vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Activities;
