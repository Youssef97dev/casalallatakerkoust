import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col justify-center items-center gap-5 text-center px-3 lg:px-40 text-casa_black py-20"
    >
      <h1 className="text-[32px] leading-[42px] font-canela">
        {
          "Casa Lalla Takerkoust is a space for members to eat, drink and celebrate"
        }
      </h1>
      <h2 className="italic text-[25px] leading-[35.5px] font-canela ">
        {
          "Featuring our signature Casa Lalla restaurant, where Mediterranean elegance meets lakeside tranquility"
        }
      </h2>
      <p className="text-[15px] leading-[28.5px] font-light italic pt-5 px-5 lg:px-52">
        {
          "Casa Lalla welcomes its guests far from the sophistication and hustle and bustle of the city, this haven of peace is the ideal place to indulge in simple pleasures and savor the mild climate."
        }
        <br />
        {
          "The decor blends memories and heritage in a simple, quirky atmosphere that exudes the sweet scent of formentera ibiza mykonos."
        }
      </p>
      <Link
        href="/booking"
        className={`tracking-[0.2em] mt-2 uppercase text-[11px] font-medium  py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full hover:bg-casa_scarlet hover:text-casa_background`}
      >
        Reservations
      </Link>
    </section>
  );
};

export default About;
