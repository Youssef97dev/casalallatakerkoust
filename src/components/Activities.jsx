import React from "react";
import Image from "next/image";
import Link from "next/link";

const Activities = () => {
  return (
    <div className="relative w-full  h-[180vh] lg:h-[125vh]">
      <div className="absolute z-20 right-0 lg:right-[181px] w-[90%] lg:w-[43%] h-fit flex flex-col justify-center items-start gap-5  p-5 lg:p-10 top-[320px] lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 bg-[#EDE5D9]">
        <h1 className="font-canela text-[27px] leading-[32.4px] text-casa_black">
          Casa Lalla producing unique member experiences
        </h1>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          <strong>Lalla Takerkoust</strong>{" "}
          {`is more than a picturesque destination — it’s a playground for adventure and exploration. Easily accessible by taxi or bus, visitors can dive straight into a variety of thrilling`}{" "}
          <strong>activities</strong>
          {". "}
          {`Feel the adrenaline rush on a`} <strong>Quad</strong>
          {" or "}
          <strong>Buggy Tour</strong>
          {`, guided off the beaten path through the foothills of the`}{" "}
          <strong>High Atlas Mountains</strong>
          {
            ". Glide across the lake on a Jet Ski, taking in breathtaking views of the snow-capped peaks. Enjoy a peaceful Nature Walk or Hike along the lake’s serene waters, spotting unique flora and fauna, perfect for birdwatching and photography."
          }
        </p>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          {`Discover the landscape on Horseback Riding adventures or explore the`}{" "}
          <strong>Agafay Desert</strong> just 5 minutes away — ideal for{" "}
          <strong>quad</strong>, <strong>buggy</strong>, or{" "}
          <strong>camel excursions</strong>. For cycling enthusiasts, a{" "}
          <strong>Bike Tour</strong> through the <strong>desert</strong> leads
          to the crystal-clear oasis of <strong>Lalla Takerkoust</strong>,
          offering an unforgettable journey surrounded by the{" "}
          <strong>High Atlas Mountains</strong>. From thrilling adventures to
          tranquil escapes, <strong>Lalla Takerkoust</strong> promises
          experiences for every taste.
        </p>
        <Link
          href="/lalla-takerkoust-activities"
          className="font-canela italic text-[18px] leading-[25.5px] text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline"
        >
          <span className="relative z-10">Discover More</span>
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
            aria-hidden="true"
          ></span>
        </Link>
      </div>
      <div className="z-10 absolute left-0 lg:left-40 w-[90%] lg:w-1/2 h-full">
        <Image
          src="/images/casalalla-takerkoust-agafay-vibes-activities-5.jpg"
          alt="casa lalla takerkoust, agafay vibes"
          width={500}
          height={500}
          className="object-cover h-[400px] lg:h-[125vh]"
        />
      </div>
    </div>
  );
};

export default Activities;
