import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2 pt-2 pb-20 md:pt-28 md:pb-28 px-5 lg:px-40">
      <h1 className="text-[40px] leading-[60px] font-canela font-thin text-casa_black">
        {"Exquisite cuisine and amazing panoramic view"}
      </h1>
      <p className="text-[25px] leading-[45px] font-canela font-thin italic text-casa_black tracking-wider">
        {
          "Step into our Mediterranean culinary heaven at CASA LALLA TAKERKOUST,"
        }
        <br />
        {
          "Discover Casa Lalla Takerkoust, our charming lakeside restaurant offering authentic flavors and warm Moroccan hospitality."
        }
      </p>
      <div className="w-full flex justify-center items-center mt-8">
        <Image
          src="/images/casa-lalla-4.png"
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
