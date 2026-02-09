import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-2 pt-2 pb-20 md:pt-28 md:pb-28 px-5 lg:px-40">
      <h1 className="text-[40px] leading-[60px] 2xl:text-[60px] 2xl:leading-[80px] font-canela font-thin text-casa_black">
        {"Exquisite cuisine and amazing panoramic view"}
      </h1>
      <p className="text-[25px] leading-[45px] 2xl:text-[40px] 2xl:leading-[65px] font-canela font-thin italic text-justify text-casa_black tracking-wider">
        Step into our Mediterranean culinary heaven at{" "}
        <strong>CASA LALLA TAKERKOUST</strong>,
        <br />a destination that stands out among the most unique{" "}
        <strong>morrocan restaurants</strong> near the city. Discover Casa Lalla
        Takerkoust, our charming lakeside retreat offering authentic flavors and
        warm hospitality that rivals the{" "}
        <strong>best morrocan restaurants</strong> in the region. Whether you
        are looking for a tranquil <strong>lunch</strong> or a{" "}
        <strong>sunset</strong> <strong>dinner</strong>, we provide a refined
        alternative to the busy <strong>restaurants marocain marrakech</strong>,{" "}
        blending fresh local ingredients with a stunning view of the{" "}
        <strong>Atlas Mountains</strong>.
      </p>
      <div className="w-full flex justify-center items-center mt-8">
        <Image
          src="/agafay-takerkoust/boho-chic-rattan-decor-luxury-restaurant.webp"
          alt="Detail of handmade rattan lighting and furniture in a luxury bohemian restaurant"
          loading="lazy"
          width={500}
          height={500}
          className="w-full opacity-70"
        />
      </div>
    </div>
  );
};

export default Intro;
