import React from "react";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  return (
    // 1. Used a semantic <section> tag to group the content.
    <section className="relative w-full flex flex-col-reverse lg:block lg:h-[125vh] items-center justify-center gap-8 lg:gap-0">
      {/* --- TEXT CONTENT --- */}
      {/* 2. Unified layout: Flexbox for mobile, Absolute positioning for desktop */}
      <div className="z-20 w-[90%] lg:w-[43%] h-fit flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-5 p-5 lg:p-10 relative lg:absolute lg:left-40 lg:top-1/2 lg:-translate-y-1/2 bg-transparent lg:bg-[#EDE5D9]">
        {/* 3. Ensure only ONE <h1> exists per page. (Note: If this is not the very top of your page, change this to an <h2> for strict SEO compliance) */}
        <h2 className="font-lora text-[27px] leading-[32.4px] text-casa_black text-center lg:text-left">
          Événements Privés & Mariages au Restaurant Casa Lalla Takerkoust
        </h2>

        {/* 4. Removed messy string concatenations and unified the text content using the richest SEO keywords. */}
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black text-justify lg:text-left">
          La vue exceptionnelle de notre paysage naturel est la scène parfaite
          pour votre <strong>événement</strong> ou votre célébration.{" "}
          {"Qu'il s'agisse d'un"} <strong>mariage</strong>, {"d'un"}{" "}
          <strong>anniversaire</strong>, {"d'une"}{" "}
          <strong>séance photo ou {"d'un"} événement de marque</strong>, vous
          pouvez vous approprier Casa Lalla pour vivre un moment inoubliable.
          Que ce soit en toute intimité ou en grand, notre concept spécial vous
          permettra de donner vie à votre imagination en toute simplicité.
        </p>

        <p className="font-light text-[15px] leading-[25.5px] text-casa_black text-justify lg:text-left">
          Accueillez vos moments inoubliables à{" "}
          <strong>Casa Lalla Takerkoust</strong>, où l’élégance raffinée
          rencontre la tranquillité du lac. Qu’il s’agisse{" "}
          <strong>d’un mariage intime</strong>,{" "}
          <strong>d’un dîner privé</strong> ou{" "}
          <strong>d’un événement professionnel</strong>, notre cadre serein
          offre la toile de fond idéale pour votre célébration. Profitez de
          menus personnalisés élaborés par nos chefs, d’un décor élégant inspiré
          du charme marocain et d’une atmosphère chaleureuse qui transforme
          chaque événement en un souvenir impérissable. À Casa Lalla Takerkoust,
          nous transformons chaque occasion spéciale en une expérience de goût,
          de beauté et d’émotion.
        </p>

        {/* 5. Added an aria-label for accessibility/SEO benefits */}
        <Link
          href="/private-events"
          className="font-lora italic text-[18px] leading-[25.5px] text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline mt-2 lg:mt-0"
          aria-label="Découvrez-en plus sur les événements privés et les mariages à Casa Lalla Takerkoust"
        >
          <span className="relative z-10">Découvrez plus</span>
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
            aria-hidden="true"
          ></span>
        </Link>
      </div>

      {/* --- IMAGE CONTENT --- */}
      {/* 6. Repositioned for the unified DOM and optimized the Next.js Image component */}
      <div className="z-10 w-[90%] lg:w-[40%] h-[400px] lg:h-full relative lg:absolute lg:right-44">
        <Image
          src="/agafay-takerkoust/mediterranean-seafood-cuisine-marrakech.webp"
          alt="Cuisine méditerranéenne gastronomique aux fruits de mer servie dans notre restaurant de luxe de style Mykonos près du lac Lalla Takerkoust à Marrakech"
          title="Dîner Premium de Fruits de Mer Méditerranéens avec Ambiance Ibiza au Lac Takerkoust"
          fill
          sizes="(max-width: 1024px) 90vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Events;
