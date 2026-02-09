import React from "react";
import Link from "next/link";

const AboutTwo = () => {
  return (
    <section
      id="about_two"
      className="w-full flex flex-col justify-center items-center gap-5 text-center px-3 lg:px-40 text-casa_black py-20"
    >
      <h1 className="text-[32px] leading-[42px] 2xl:text-[52px] 2xl:leading-[62px] font-canela">
        {"Casa Lalla Takerkoust, Agafay Desert Vibes"}
      </h1>
      <h2 className="italic text-[25px] leading-[35.5px] 2xl:text-[45px] 2xl:leading-[55.5px] font-canela">
        {"Being in the right place at the right time"}
      </h2>
      <p className="text-[15px] leading-[28.5px] 2xl:text-[35px] 2xl:leading-[48.5px] font-light text-justify pt-5 px-5 lg:px-52">
        The menu at <strong>Casa Lalla Takerkoust</strong> is a culinary journey
        through the heart of{" "}
        <strong>Moroccan and Mediterranean gastronomy</strong>. As one of the{" "}
        <strong>best restaurants near Marrakech</strong>, it prides itself on
        using fresh, locally sourced ingredients to create high-end versions of
        traditional classics. Indulge in their signature, fragrant{" "}
        <strong>Saffron-infused Couscous</strong>, or a delicate{" "}
        <strong>Chicken Pastilla</strong> that perfectly balances sweet and
        savory notes. For those seeking international variety, the kitchen also
        offers refined seafood dishes and creative vegetarian options. Pair your
        meal with a selection from their curated wine list or a signature
        cocktail at the <strong>poolside bar</strong>, making it the ultimate
        spot for <strong>gourmet dining in the Agafay Desert</strong>.
      </p>
      <div className="h-[2px] w-14 bg-casa_scarlet mx-auto my-4"></div>
      <Link
        href="/reservation"
        className={`tracking-[0.2em] mt-2 uppercase text-[11px] 2xl:text-[21px] font-medium  py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full hover:bg-casa_scarlet hover:text-casa_background`}
      >
        Reservations
      </Link>
    </section>
  );
};

export default AboutTwo;
