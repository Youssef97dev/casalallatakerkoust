import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2 pt-2 pb-20 md:pt-28 md:pb-28 px-5 lg:px-40">
      <h1 className="text-[40px] leading-[60px] font-canela font-thin text-casa_black">
        {"Une cuisine exquise et une vue panoramique extraordinaire"}
      </h1>
      <p className="text-[17px] leading-[40px] font-lora italic text-casa_black tracking-wider">
        {
          "Entrez dans notre paradis culinaire méditerranéen a Casa Lalla Takerkoust,"
        }
        <br />
        {
          "Découvrez Casa Lalla Takerkoust, notre charmant restaurant au bord du lac, offrant des saveurs authentiques et une chaleureuse hospitalité marocaine."
        }
      </p>
      <div className="w-full flex justify-center items-center mt-8">
        <Image
          src="/agafay-takerkoust/boho-chic-rattan-decor-luxury-restaurant.webp"
          alt="Detail of handmade rattan lighting and furniture in a luxury bohemian restaurant"
          width={500}
          height={500}
          className="w-full opacity-70"
        />
      </div>
    </div>
  );
};

export default Intro;
