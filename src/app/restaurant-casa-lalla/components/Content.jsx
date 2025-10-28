import React from "react";
import Link from "next/link";

const Content = () => {
  return (
    <section
      id="our-philosophy"
      className="w-full flex flex-col justify-center items-center gap-4 py-24 lg:py-32 px-5 lg:px-80 text-center"
    >
      <h1 className="font-canela text-[35px] leading-[42px] text-casa_black">
        Our Philosophy
      </h1>
      <h2 className="font-canela text-[25px] leading-[32.5px] text-casa_black italic">
        CASA LALLA TAKERKOUST Restaurant invites you on a voyage through the
        rich culinary culture and vibrant flavors of the Mediterranean.
      </h2>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black mt-8 px-0 lg:px-14">
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla Takerkoust
        </strong>{" "}
        is a unique and upscale <strong>dining destination</strong> located in
        the scenic area of <strong>Barrage Lalla Takerkoust</strong>. Offering a
        combination of{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          traditional Moroccan
        </strong>{" "}
        and{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          international cuisine
        </strong>
        , the restaurant serves up a mouth-watering menu in a{" "}
        <strong>relaxed</strong> and <strong>stylish setting</strong>. With a
        focus on fresh and locally sourced ingredients,{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla Takerkoust
        </strong>{" "}
        offers an{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          authentic culinary experience
        </strong>{" "}
        that showcases the best of the {"region's"} flavors.
      </p>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14">
        As a <strong>lounge bar</strong>,{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla Takerkoust
        </strong>{" "}
        provides the{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          perfect spot
        </strong>{" "}
        to unwind and <strong>relax with friends</strong>,{" "}
        <strong>family</strong>, or <strong>colleagues</strong>. The venue
        offers a wide selection of carefully crafted{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          cocktails
        </strong>
        ,{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          premium wines
        </strong>
        , and other beverages, all served in a{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          sophisticated and welcoming atmosphere
        </strong>
        .
      </p>
      <Link
        href="/booking"
        className={`mt-5 tracking-[0.2em] text-[11px] font-medium uppercase py-2.5 px-4 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet hover:bg-casa_scarlet hover:text-casa_background rounded-full`}
      >
        Reservations
      </Link>
    </section>
  );
};

export default Content;
