"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    src: "/images/casalalla-takerkoust-agafay-vibes-experience-porshe.jpg",
    class: "object-center",
    title: "Porsche Cayenne Tour",
    text: "1H30 - 9H30",
  },
  {
    src: "/images/casalalla-takerkoust-vibes-agafay-activities-6.jpg",
    class: "object-bottom",
    title: "Quad",
    text: "Satisfy your need for speed and adventure with a quad tour around Lalla Takerkoust and take in breathtaking landscapes. Experienced guides will take you off the beaten path at the foothills of the High Atlas Mountains.",
  },
  {
    src: "/images/activities-slide-buggy.webp",
    class: "object-center",
    title: "Buggy",
    text: "Satisfy your need for speed and adventure with a quad tour around Lalla Takerkoust and take in breathtaking landscapes. Experienced guides will take you off the beaten path at the foothills of the High Atlas Mountains.",
  },
  {
    src: "/images/casalalla-takerkoust-agafay-vibes-contact-large.jpeg",
    class: "object-center",
    title: "Jetski",
    text: "Get your heart racing with a jet ski adventure as you glide across the scenic Lalla Takerkoust lake and enjoy stunning views of the snow-capped High Atlas Mountains.",
  },
];

const Experience = () => {
  return (
    <div className="pt-24 relative w-full h-full">
      {/*<div className="w-full grid grid-cols-1 gap-10 md:gap-20 items-start">
        <div
          className=" [&_.swiper-button-next]:text-white
[&_.swiper-button-prev]:text-white
[&_.swiper-pagination-bullet]:bg-white
[&_.swiper-pagination-bullet-active]:bg-red-500"
        >
          <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="w-[100%]"
            autoHeight={true}
          >
            {images.map((img, i) => (
              <>
                <SwiperSlide
                  key={i}
                  className="relative flex items-center justify-center"
                >
                  <div className="relative w-full max-h-[480px] flex items-center justify-center overflow-hidden">
                    <Image
                      src={img.src}
                      alt="slider"
                      width={1000}
                      height={1000}
                      className={`object-contain w-auto h-auto max-h-[480px] ${img.class}`}
                    />
                    
                    <button className="custom-prev !absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-5xl">
                      ‹
                    </button>
                    <button className="custom-next !absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-5xl">
                      ›
                    </button>
                  </div>
                  <div className="w-full flex flex-col justify-start items-start gap-4 p-4">
                    <h1 className="text-[18px]">{img.title}</h1>
                    <p className="text-[15px] pb-4 text-left">{img.text}</p>
                  </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
      </div>*/}
      <iframe
        src="https://casalalla-activities.vercel.app/"
        className="w-full h-full"
      />
    </div>
  );
};

export default Experience;
