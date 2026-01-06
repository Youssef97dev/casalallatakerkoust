"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const imagesLarge = [
  {
    src: "/images/casalalla-takerkoust-agafay-vibes-1.jpg",
    class: "object-center",
  },
  {
    src: "/images/casalalla-takerkoust-agafay-vibes-6.jpg",
    class: "object-[50%,40%]",
  },
  {
    src: "/images/casalalla-takerkoust-agafay-vibes-3.jpg",
    class: "object-center",
  },
  {
    src: "/images/casalalla-takerkoust-agafay-vibes-5.jpg",
    class: "object-center",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLarge.length);
    }, 5000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="hero" className="relative w-full h-screen">
      <div className="w-full h-full hidden lg:block">
        {imagesLarge.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={`casalalla, takerkoust, agafay vibes ${index + 1}`}
              width={1500}
              height={1500}
              className={`w-full h-full object-cover ${image.class}`}
            />
          </div>
        ))}
      </div>
      <div className="w-full h-full block lg:hidden">
        <video
          className="object-cover h-full w-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video/casalalla-vibes-agafay.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Overlay*/}
      <div className="absolute top-0 left-0 w-full h-[90%] bg-gradient-to-b from-black/80 to-transparent"></div>

      <div
        id="hero-logo"
        className={`fixed z-50 transition-all duration-700 ease-in-out
          ${
            scrolled
              ? "top-4 left-24 translate-x-0 translate-y-0 scale-50 opacity-0"
              : "top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
          }
        `}
      >
        <Image
          src="/casa-lalla-background.png"
          alt="Casa Lalla"
          width={160}
          height={160}
          priority
        />
      </div>

      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white z-40">
        <a href="#about">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7 7 7-7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;
