import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/agafay-takerkoust/mykonos-vibes-restaurant-agafay-desert-marrakech.webp",
    alt: "Luxury Mykonos vibe restaurant and day club oasis in the Agafay Desert near Marrakech",
    title: "Experience Mykonos Vibes at Our Agafay Desert Restaurant",
    video: false,
    link: "https://www.instagram.com/p/DSHv8mkDbTF/",
  },
  {
    src: "/agafay-takerkoust/ibiza-sunset-lounge-near-royal-mansour.webp",
    alt: "Chic Ibiza style sunset lounge offering premium luxury experiences and VIP service near Marrakech",
    title: "Ibiza Style Sunset Lounge & Luxury Day Club",
    video: false,
    link: "https://www.instagram.com/p/DSHvxAujVCu/",
  },
  {
    src: "/agafay-takerkoust/mykonos-chic-Lalla-akerkoust-lake-morocco.webp",
    alt: "Mykonos chic lakeside dining and boho-chic atmosphere at Lake Lalla Takerkoust in Morocco",
    title: "Mykonos Chic Luxury Dining at Lake Lalla Takerkoust",
    video: false,
    link: "https://www.instagram.com/p/DSHuJyJDShv/",
  },
  {
    src: "/agafay-takerkoust/luxury-trip-from-mamounia-the-lake.webp",
    alt: "Exclusive luxury day trip to Lake Takerkoust featuring vibrant Ibiza beach club vibes and stunning views",
    title: "Exclusive Luxury Day Trip to Our Lakeside Beach Club",
    video: false,
    link: "https://www.instagram.com/p/DHjsxYRoOAP/",
  },
  {
    src: "/agafay-takerkoust/royal-mansour-lake-takerkoust-agafay.webp",
    alt: "High-end VIP desert oasis near Lake Takerkoust and the Agafay Desert offering 5-star service",
    title: "VIP Desert Oasis & Luxury Day Club Near Agafay",
    video: false,
    link: "https://www.instagram.com/p/DQ7fxQFDl_v/",
  },
  {
    src: "/agafay-takerkoust/restaurants-marocain-marrakech-agafay.jpg",
    alt: "Authentic fine dining Moroccan restaurant in the Agafay Desert with a stylish bohemian Mykonos atmosphere",
    title: "Fine Moroccan Dining in a Chic Agafay Desert Setting",
    video: false,
    link: "https://www.instagram.com/p/DGlJuUJNAxp/",
  },
];

const InstagramSection = () => {
  return (
    <section className="py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-[25px] leading-[35.2px] font-canela text-casa_black">
          Experience Casa Lalla Takerkoust at your own pace — refined luxury,
          lakeside tranquility, and a culinary journey of emotion and culture.
        </h2>
        <p className="text-[15px] leading-[25.5px] font-light mt-4 text-casa_black">
          Follow us on Instagram{" "}
          <Link
            href="https://www.instagram.com/casa.lalla.takerkoust/"
            className="text-casa_scarlet"
          >
            @casa.lalla.takerkoust
          </Link>
        </p>
        <div className="w-14 h-[1.8px] bg-casa_scarlet mx-auto mt-8 mb-8"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-2 max-w-7xl mx-auto px-4">
        {images.map((image, index) => (
          <Link key={index} href={image.link}>
            <div className="relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                title={image.title}
                loading="lazy"
                width={250}
                height={250}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-105"
              />
              {/* Optional play icon overlay */}
              {image.video && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.24v7.52a1 1 0 001.234.97l6.518-3.759a1 1 0 000-1.772z"
                    />
                  </svg>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
