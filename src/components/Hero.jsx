"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Unified array for easy management of desktop and mobile assets
const slides = [
  {
    desktopSrc:
      "/agafay-takerkoust/sunset-cocktails-lalla-takerkoust-lounge.webp",
    mobileSrc:
      "/agafay-takerkoust/restaurant-lake-view-casa-lalla-takerkoust.webp",
    alt: "Premium cocktails at sunset on the Casa Lalla Takerkoust lounge bar terrace",
    desktopClass: "object-center",
    mobileClass: "object-center",
  },
  {
    desktopSrc: "/agafay-takerkoust/agafay-restaurants-marocain-marrakech.webp",
    mobileSrc:
      "/agafay-takerkoust/tourists-enjoying-drinks-lalla-takerkoust.webp",
    alt: "Best Moroccan restaurants in Marrakech desert", // Improved alt text for SEO
    desktopClass: "object-center",
    mobileClass: "object-center",
  },
  {
    desktopSrc:
      "/agafay-takerkoust/destination-wedding-marrakech-lake-takerkoust.webp",
    mobileSrc:
      "/agafay-takerkoust/casa-lalla-takerkoust-entrance-marrakech.webp",
    alt: "Elegant boho-chic wedding ceremony at Casa Lalla Takerkoust overlooking the water",
    desktopClass: "object-center",
    mobileClass: "object-center",
  },
  {
    desktopSrc: "/agafay-takerkoust/corporate-event-venue-marrakech-lake.webp",
    mobileSrc:
      "/agafay-takerkoust/boho-chic-lounge-mykonos-vibe-lalla-takerkoust.webp",
    alt: "Sophisticated venue setup for a private corporate event at Lalla Takerkoust",
    desktopClass: "object-center",
    mobileClass: "object-center",
  },
  {
    desktopSrc:
      "/agafay-takerkoust/seafood-pasta-mediterranean-dining-morocco.webp",
    mobileSrc:
      "/agafay-takerkoust/casa-lalla-takerkoust-lake-view-terrace.webp",
    alt: "Freshly prepared seafood pasta at Casa Lalla's Mediterranean restaurant",
    desktopClass: "object-bottom",
    mobileClass: "object-center",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Slideshow Interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Scroll Listener for Logo Animation
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true }); // passive: true improves scroll performance
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background Slideshow */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        const isZooming = isActive && mounted;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "opacity-100 z-10"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Zoom Wrapper (Ken Burns Effect) */}
            <div
              className={`absolute inset-0 w-full h-full transition-transform duration-[10000ms] ease-linear ${
                isZooming ? "scale-110" : "scale-100"
              }`}
            >
              {/* Mobile Image Container */}
              <div className="block lg:hidden absolute inset-0 w-full h-full">
                <Image
                  src={slide.mobileSrc}
                  alt={slide.alt}
                  fill
                  priority={index === 0} // SEO/LCP Fix: Only preload the first image
                  sizes="100vw"
                  className={`object-cover ${slide.mobileClass}`}
                />
              </div>

              {/* Desktop Image Container */}
              <div className="hidden lg:block absolute inset-0 w-full h-full">
                <Image
                  src={slide.desktopSrc}
                  alt={slide.alt}
                  fill
                  priority={index === 0} // SEO/LCP Fix: Only preload the first image
                  sizes="100vw"
                  className={`object-cover ${slide.desktopClass}`}
                />
              </div>
            </div>
          </div>
        );
      })}

      {/* Dark Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[90%] bg-gradient-to-b from-black/30 to-transparent z-20 pointer-events-none" />

      {/* Animated Logo */}
      <div
        id="hero-logo"
        className={`fixed z-40 transition-all duration-700 ease-in-out
          ${
            scrolled
              ? "top-4 left-[32%] lg:left-[45%] translate-x-0 translate-y-0 scale-50 opacity-0 pointer-events-none"
              : "top-60 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100"
          }
        `}
      >
        <Image
          src="/casa-lalla-background.png"
          alt="Casa Lalla Logo"
          width={384} // Represents max 2xl width (96rem roughly)
          height={384}
          priority // Important for LCP since it's above the fold
          className="w-40 2xl:w-96 object-contain"
        />
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 text-white z-40">
        <a href="#about" aria-label="Scroll down to about section">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 animate-bounce drop-shadow-md"
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
    </section>
  );
};

export default Hero;
