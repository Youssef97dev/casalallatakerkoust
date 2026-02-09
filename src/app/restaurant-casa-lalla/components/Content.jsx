import React from "react";
import Link from "next/link";

const Content = () => {
  return (
    <section
      id="our-philosophy"
      className="w-full flex flex-col justify-center items-center gap-4 py-24 lg:py-32 px-5 lg:px-80 text-center"
    >
      <h1 className="font-canela text-[35px] leading-[42px] text-casa_black">
        CASA LALLA TAKERKOUST: A Culinary Voyage in The Heart of The Region
      </h1>

      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black mt-8 px-0 lg:px-14 text-justify">
        Discover{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Marrakech best of
        </strong>{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          restaurants
        </strong>{" "}
        just a short drive from the city center.{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla Takerkoust
        </strong>{" "}
        invites you on a voyage through the rich culinary culture and vibrant
        flavors of the Mediterranean, set against the breathtaking backdrop of
        the Atlas Mountains.
      </p>
      <h2 className="font-canela text-[25px] leading-[32.5px] text-casa_black italic">
        A Unique Dining Destination on Lake Takerkoust
      </h2>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14 text-justify">
        Located in the scenic area of Barrage Lalla Takerkoust, our restaurant
        is a unique and upscale dining destination. We offer a mouth-watering
        menu that blends{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          traditional Moroccan
        </strong>{" "}
        dishes with refined international cuisine. Whether you are looking for{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          top Morrocan restaurants
        </strong>{" "}
        or a Mediterranean escape, we serve it all in a relaxed and stylish
        setting.
      </p>
      <h2 className="font-canela text-[25px] leading-[32.5px] text-casa_black italic">
        The Best Terrace for Agafay Vibes and Desert Views
      </h2>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14 text-justify">
        Escape the city bustle and immerse yourself in authentic{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Agafay vibes
        </strong>
        . Our expansive{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          terrace
        </strong>{" "}
        offers panoramic views of the shimmering{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Lake Takerkoust
        </strong>{" "}
        and the surrounding{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          desert
        </strong>{" "}
        landscape, making it the perfect backdrop for a{" "}
        <strong>sunny lunch</strong> or a <strong>romantic dinner</strong>.
      </p>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14 text-justify">
        With a focus on fresh, locally sourced ingredients, Casa Lalla offers an
        authentic culinary experience that rivals the{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          best restaurants in Marrakech
        </strong>
        . Our chefs showcase the {"region's"} finest flavors, ensuring every
        dish is a celebration of taste.
      </p>
      <h2 className="font-canela text-[25px] leading-[32.5px] text-casa_black italic">
        Lounge Bar and Sophisticated Atmosphere
      </h2>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14 text-justify">
        As a lounge bar,{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla Takerkoust
        </strong>{" "}
        is the perfect spot to unwind with friends, family, or colleagues. Enjoy
        our wide selection of carefully crafted{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          cocktails
        </strong>
        , premium wines, and other beverages. If you are searching for{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          restaurants marocain marrakech
        </strong>{" "}
        that offer both sophisticated dining and a welcoming atmosphere, look no
        further.
      </p>
      <Link
        href="/reservation"
        className={`mt-5 tracking-[0.2em] text-[11px] font-medium uppercase py-2.5 px-4 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet hover:bg-casa_scarlet hover:text-casa_background rounded-full`}
      >
        Reservations
      </Link>
    </section>
  );
};

export default Content;
