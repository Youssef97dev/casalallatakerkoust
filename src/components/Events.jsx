import React from "react";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  return (
    <>
      <div className="relative w-full h-[125vh] hidden lg:block 2xl:hidden">
        <div className="absolute z-20 left-0 lg:left-40 w-[90%] lg:w-[43%] h-fit flex flex-col justify-center items-start gap-5  p-5 lg:p-10 top-[320px] lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 bg-[#EDE5D9]">
          <h1 className="font-canela text-[27px] leading-[32.4px]  text-casa_black">
            Private Events and Weddings at Casa Lalla Takerkoust Restaurant
          </h1>
          <p className="font-light text-[15px] leading-[25.5px]  text-casa_black">
            The unmatched beauty of our natural landscape provides the
            quintessential <strong>Agafay vibes</strong> for your next
            milestone. Frequently cited among the{" "}
            <strong>best restaurants marocain Marrakech</strong> for its scenic
            allure,
            <strong>Casa Lalla Takerkoust</strong> offers a backdrop that
            transforms <strong>weddings</strong>,<strong>anniversaries</strong>,
            and <strong>brand events</strong> into visual masterpieces. Whether
            you are hosting an intimate gathering or a grand celebration, our
            venue allows you to capture the serenity of the{" "}
            <strong>lake</strong> and the <strong>desert</strong>
            while enjoying the hospitality that places us among the{" "}
            <strong>top restaurants in Marrakech</strong> for{" "}
            <strong>private events</strong>. We ensure your vision comes to life
            seamlessly, blending <strong>Bohemian elegance</strong> with the raw
            spirit of the Moroccan wilderness.
          </p>
          <p className="font-light text-[15px] leading-[25.5px]  text-casa_black">
            Host your unforgettable moments at{" "}
            <strong>Casa Lalla Takerkoust</strong>, where refined elegance meets
            the tranquility of the <strong>lake</strong>. As a destination that
            consistently ranks as one of the{" "}
            <strong>best restaurants in Marrakech</strong>, we provide more than
            just a venue—we provide a curated experience. From{" "}
            <strong>private dinners</strong> to corporate gatherings, our
            setting delivers those sought-after <strong>Agafay vibes</strong>{" "}
            that travelers and locals alike crave. Our chefs craft personalized
            menus that rival the{" "}
            <strong>top restaurants marocain Marrakech</strong>, ensuring that
            every bite of our <strong>Moroccan-inspired cuisine</strong> is as
            memorable as the <strong>sunset</strong> views. At{" "}
            <strong>Casa Lalla</strong>, we transform your special occasion into
            an <strong>experience of taste, beauty, and emotion</strong>.
          </p>
          <Link
            href="/private-events"
            className="font-canela italic text-[18px] leading-[25.5px]  text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline"
          >
            <span className="relative z-10">Discover More</span>
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
              aria-hidden="true"
            ></span>
          </Link>
        </div>
        <div className="z-10 absolute right-0 w-[90%] lg:w-1/2 h-full ">
          <Image
            src="/agafay-takerkoust/mediterranean-seafood-cuisine-marrakech.webp"
            alt="casa lalla takerkoust, agafay vibes"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover h-[400px] lg:h-[125vh]"
          />
        </div>
      </div>

      {/*<div className="w-full h-[80vh] hidden 2xl:flex flex-row gap-8 justify-center items-center px-40">
        <div className="w-full flex flex-col gap-3 justify-center  items-center bg-red-300">
          <h1 className="font-canela text-[47px] leading-[52.4px] text-casa_black">
            Private Events and Weddings at Casa Lalla Takerkoust Restaurant
          </h1>
          <p className="font-light text-[25px] leading-[45.5px] text-casa_black">
            The unmatched beauty of our <strong>natural</strong> landscape is
            the perfect <strong>backdrop</strong> for your{" "}
            <strong>event</strong> or <strong>celebration</strong>. From{" "}
            <strong>weddings</strong>, <strong>anniversaries</strong>
            {" and "}
            <strong>birthdays</strong> to <strong>photo shoots</strong> and{" "}
            <strong>brand events</strong>, you can make{" "}
            <strong>Casa lalla</strong> your own for an unforgettable time.
            whether intimate or grand, our specially designed{" "}
            <strong>experience</strong> will ensure your vision comes to life
            seamlessly.
          </p>
          <p className="font-light text-[25px] leading-[45.5px] text-casa_black">
            Host your unforgettable moments at{" "}
            <strong>Casa Lalla Takerkoust</strong>, where refined elegance meets
            the tranquility of the <strong>lake</strong>. Whether it’s an
            intimate <strong>wedding</strong>, a <strong>private dinner</strong>
            , or a <strong>corporate gathering</strong>, our serene setting
            offers the perfect backdrop for your <strong>celebration</strong>.
            Enjoy <strong>personalized menus</strong> crafted by our chefs,
            elegant décor inspired by <strong>Moroccan charm</strong>, and a
            warm atmosphere that turns every <strong>event</strong> into a
            lasting memory. At <strong>Casa Lalla Takerkoust</strong>, we
            transform your special occasion into an experience of taste, beauty,
            and emotion.
          </p>
          <Link
            href="/private-events"
            className="font-canela italic text-[32px] leading-[35.5px] text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline"
          >
            <span className="relative z-10">Discover More</span>
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
              aria-hidden="true"
            ></span>
          </Link>
        </div>
        <div className="w-full h-full bg-red-600">
          <Image
            src="/agafay-takerkoust/mediterranean-seafood-cuisine-marrakech.webp"
            alt="Exquisite Mediterranean seafood dish served at Casa Lalla Takerkoust restaurant agafay desert"
            loading="lazy"
            width={1500}
            height={1500}
            className="object-cover h-full w-full"
          />
        </div>
      </div>*/}

      <div className="w-full flex lg:hidden flex-col-reverse gap-8 justify-center items-center">
        <div className="w-full flex flex-col gap-3 justify-center  items-center">
          <h1 className="font-canela text-[27px] leading-[32.4px] text-casa_black">
            Private Events and Weddings at Casa Lalla Takerkoust Restaurant
          </h1>
          <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
            The unmatched beauty of our <strong>natural</strong> landscape is
            the perfect <strong>backdrop</strong> for your{" "}
            <strong>event</strong> or <strong>celebration</strong>. From{" "}
            <strong>weddings</strong>, <strong>anniversaries</strong>
            {" and "}
            <strong>birthdays</strong> to <strong>photo shoots</strong> and{" "}
            <strong>brand events</strong>, you can make{" "}
            <strong>Casa lalla</strong> your own for an unforgettable time.
            whether intimate or grand, our specially designed{" "}
            <strong>experience</strong> will ensure your vision comes to life
            seamlessly.
          </p>
          <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
            Host your unforgettable moments at{" "}
            <strong>Casa Lalla Takerkoust</strong>, where refined elegance meets
            the tranquility of the <strong>lake</strong>. Whether it’s an
            intimate <strong>wedding</strong>, a <strong>private dinner</strong>
            , or a <strong>corporate gathering</strong>, our serene setting
            offers the perfect backdrop for your <strong>celebration</strong>.
            Enjoy <strong>personalized menus</strong> crafted by our chefs,
            elegant décor inspired by <strong>Moroccan charm</strong>, and a
            warm atmosphere that turns every <strong>event</strong> into a
            lasting memory. At <strong>Casa Lalla Takerkoust</strong>, we
            transform your special occasion into an experience of taste, beauty,
            and emotion.
          </p>
          <Link
            href="/private-events"
            className="font-canela italic text-[18px] leading-[25.5px] text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline"
          >
            <span className="relative z-10">Discover More</span>
            <span
              className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
              aria-hidden="true"
            ></span>
          </Link>
        </div>
        <div className="w-full h-full">
          <Image
            src="/agafay-takerkoust/mediterranean-seafood-cuisine-marrakech.webp"
            alt="Exquisite Mediterranean seafood dish served at Casa Lalla Takerkoust restaurant agafay desert"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover h-full"
          />
        </div>
      </div>
    </>
  );
};

export default Events;
