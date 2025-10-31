import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2 pt-2 pb-20 md:pt-28 md:pb-28 px-5 lg:px-40">
      <h1 className="text-[40px] leading-[60px] font-canela font-thin text-casa_black">
        {"Une cuisine exquise et une vue panoramique extraordinaire"}
      </h1>
      <p className="text-[25px] leading-[45px] font-canela font-thin italic text-casa_black tracking-wider">
        {
          "Entrez dans notre paradis culinaire méditerranéen à CASA LALLA TAKERKOUST,"
        }
        <br />
        {
          "Découvrez Casa Lalla Takerkoust, notre charmant restaurant au bord du lac, offrant des saveurs authentiques et une chaleureuse hospitalité marocaine."
        }
      </p>
      <div className="w-full flex justify-center items-center mt-8">
        <Image
          src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761829529/casalalla-illustration_fjwptf.jpg"
          alt="casa lalla agafay vibes desert"
          width={500}
          height={500}
          className="w-full opacity-70"
        />
      </div>
    </div>
  );
};

export default Intro;
