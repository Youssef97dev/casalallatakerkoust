import React from "react";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  return (
    // 1. Used a semantic <section> tag to group the content.
    <section className="relative w-full flex flex-col-reverse lg:block lg:h-[125vh] items-center justify-center gap-8 lg:gap-0">
      {/* --- TEXT CONTENT --- */}
      {/* 2. Unified layout: Flexbox for mobile, Absolute positioning for desktop */}
      <div className="z-20 w-[90%] lg:w-[43%] h-fit flex flex-col justify-center items-center lg:items-start gap-4 lg:gap-5 p-5 lg:p-10 relative lg:absolute lg:left-40 lg:top-1/2 lg:-translate-y-1/2 bg-transparent lg:bg-[#EDE5D9]">
        {/* 3. Ensure only ONE <h1> exists per page. (Note: If this is not the very top of your page, change this to an <h2> for strict SEO compliance) */}
        <h2 className="font-canela text-[27px] leading-[32.4px] text-casa_black text-center lg:text-left">
          Private Events and Weddings at Casa Lalla Takerkoust Restaurant
        </h2>

        {/* 4. Removed messy string concatenations and unified the text content using the richest SEO keywords. */}
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black text-justify lg:text-left">
          The unmatched beauty of our natural landscape provides the
          quintessential <strong>Agafay vibes</strong> for your next milestone.
          Frequently cited among the{" "}
          <strong>best restaurants marocain Marrakech</strong> for its scenic
          allure, <strong>Casa Lalla Takerkoust</strong> offers a backdrop that
          transforms <strong>weddings</strong>, <strong>anniversaries</strong>,
          and <strong>brand events</strong> into visual masterpieces. Whether
          you are hosting an intimate gathering or a grand celebration, our
          venue allows you to capture the serenity of the <strong>lake</strong>{" "}
          and the <strong>desert</strong> while enjoying the hospitality that
          places us among the <strong>top restaurants in Marrakech</strong> for{" "}
          <strong>private events</strong>. We ensure your vision comes to life
          seamlessly, blending <strong>Bohemian elegance</strong> with the raw
          spirit of the Moroccan wilderness.
        </p>

        <p className="font-light text-[15px] leading-[25.5px] text-casa_black text-justify lg:text-left">
          Host your unforgettable moments at{" "}
          <strong>Casa Lalla Takerkoust</strong>, where refined elegance meets
          the tranquility of the <strong>lake</strong>. As a destination that
          consistently ranks as one of the{" "}
          <strong>best restaurants in Marrakech</strong>, we provide more than
          just a venue—we provide a curated experience. From{" "}
          <strong>private dinners</strong> to corporate gatherings, our setting
          delivers those sought-after <strong>Agafay vibes</strong> that
          travelers and locals alike crave. Our chefs craft personalized menus
          that rival the <strong>top restaurants marocain Marrakech</strong>,
          ensuring that every bite of our{" "}
          <strong>Moroccan-inspired cuisine</strong> is as memorable as the{" "}
          <strong>sunset</strong> views. At <strong>Casa Lalla</strong>, we
          transform your special occasion into an experience of taste, beauty,
          and emotion.
        </p>

        {/* 5. Added an aria-label for accessibility/SEO benefits */}
        <Link
          href="/private-events"
          className="font-canela italic text-[18px] leading-[25.5px] text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline mt-2 lg:mt-0"
          aria-label="Discover more about private events and weddings at Casa Lalla Takerkoust"
        >
          <span className="relative z-10">Discover More</span>
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
            aria-hidden="true"
          ></span>
        </Link>
      </div>

      {/* --- IMAGE CONTENT --- */}
      {/* 6. Repositioned for the unified DOM and optimized the Next.js Image component */}
      <div className="z-10 w-[90%] lg:w-[40%] h-[400px] lg:h-full relative lg:absolute lg:right-44">
        <Image
          src="/agafay-takerkoust/mediterranean-seafood-cuisine-marrakech.webp"
          alt="Gourmet Mediterranean seafood cuisine served at our luxury Mykonos-style restaurant near Lake Lalla Takerkoust in Marrakech"
          title="Premium Mediterranean Seafood Dining with Ibiza Vibes at Lake Takerkoust"
          fill
          sizes="(max-width: 1024px) 90vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Events;
