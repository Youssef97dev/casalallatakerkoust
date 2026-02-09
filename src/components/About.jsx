import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center gap-5 text-center px-3 lg:px-40 text-casa_black py-20"
    >
      <h1 className="text-[32px] leading-[42px] 2xl:text-[52px] 2xl:leading-[62px] font-canela">
        {
          "Casa Lalla Takerkoust is a space for members to eat, drink and celebrate"
        }
      </h1>
      <h2 className="italic text-[25px] leading-[35.5px] 2xl:text-[45px] 2xl:leading-[55.5px] font-canela ">
        {
          "Featuring our signature Casa Lalla restaurant, where Mediterranean elegance meets lakeside tranquility"
        }
      </h2>
      <p className="text-[15px] leading-[28.5px] 2xl:text-[35px] 2xl:leading-[48.5px] font-light text-justify pt-5 px-5 lg:px-40">
        Experience the perfect blend of <strong>Bohemian chic</strong> and
        Moroccan serenity at <strong>Casa Lalla Takerkoust</strong>, the premier{" "}
        <strong>luxury restaurant in Agafay</strong>. Often described as a{" "}
        <strong>{`"Mykonos and Ibiza style"`}</strong> retreat just a short
        drive from Marrakech, this stunning venue offers a breathtaking
        panoramic view of the <strong>Lalla Takerkoust Lake</strong> and the
        snow-capped <strong>Atlas Mountains</strong>. Whether you are looking
        for a <strong>romantic dinner in Agafay</strong> or a stylish poolside
        lunch, the atmosphere is designed for complete relaxation. With its
        elegant white-washed decor, lush gardens, and sophisticated lounge vibe,
        Casa Lalla stands out as a top{" "}
        <strong>desert dining destination</strong> for those seeking a tranquil
        escape from the bustling Medina.
      </p>
      <Link
        href="/reservation"
        className={`tracking-[0.2em] mt-2 uppercase text-[11px] 2xl:text-[21px] font-medium  py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full hover:bg-casa_scarlet hover:text-casa_background`}
      >
        Reservations
      </Link>
    </section>
  );
};

export default About;
