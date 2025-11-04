import React from "react";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  return (
    <div className="relative w-full h-[137vh] lg:h-[110vh]">
      <div className="absolute z-20 left-0 lg:left-40 w-[90%] lg:w-[43%] h-fit flex flex-col justify-center items-start gap-5  p-5 lg:p-10 top-[320px] lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 bg-[#EDE5D9]">
        <h1 className="font-canela text-[27px] leading-[32.4px] text-casa_black">
          Private Events and Weddings at Casa Lalla Takerkoust Restaurant
        </h1>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          The unmatched beauty of our <strong>natural</strong> landscape is the
          perfect <strong>backdrop</strong> for your <strong>event</strong> or{" "}
          <strong>celebration</strong>. From <strong>weddings</strong>,{" "}
          <strong>anniversaries</strong>
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
          the tranquility of the <strong>lake</strong>. Whether it’s an intimate{" "}
          <strong>wedding</strong>, a <strong>private dinner</strong>, or a{" "}
          <strong>corporate gathering</strong>, our serene setting offers the
          perfect backdrop for your <strong>celebration</strong>. Enjoy{" "}
          <strong>personalized menus</strong> crafted by our chefs, elegant
          décor inspired by <strong>Moroccan charm</strong>, and a warm
          atmosphere that turns every <strong>event</strong> into a lasting
          memory. At <strong>Casa Lalla Takerkoust</strong>, we transform your
          special occasion into an experience of taste, beauty, and emotion.
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
      <div className="z-10 absolute right-0 w-[90%] lg:w-1/2 h-full">
        <Image
          src="/images/casalallatakerkoust-vibes-agafay.jpg"
          alt="casa lalla takerkoust, agafay vibes"
          width={500}
          height={500}
          className="object-cover h-[400px] lg:h-[110vh]"
        />
      </div>
    </div>
  );
};

export default Events;
