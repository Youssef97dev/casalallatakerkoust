import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section
      id="blog" // Changed ID to be more keyword-relevant than just "blog"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
      aria-labelledby="main-heading"
    >
      <header>
        <h1
          id="main-heading"
          className="font-canela text-[35px] leading-[42px] text-casa_black mx-8 lg:mx-56"
        >
          Best Restaurant on Agafay Desert: Dining & Desert Activities
        </h1>
        <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
          Unforgettable Open-Air Dining and Desert Adventures
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 mt-8">
        {/* Left Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-gallery/chic-desert-oasis-design-mykonos-inspiration.webp"
            alt="Luxury boutique accommodation at Casa Lalla Takerkoust with panoramic views of the High Atlas Mountains."
            width={500}
            height={500}
            priority // Added priority if this loads above the fold
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
          <Image
            src="/agafay-gallery/luxury-dining-takerkoust-mykonos-style.webp"
            alt="Serene lakeside retreat and tranquil eco-lodge situated at Lalla Takerkoust near Marrakech."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
        </div>

        {/* Center Content Column */}
        <article className="w-full flex flex-col justify-start items-start text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            For travelers seeking the ultimate combination of luxury and
            adventure, Casa Lalla stands out as the best restaurant on the
            Agafay Desert edge. Nestled in a landscape of dramatic dunes and
            vast, open skies, our venue offers an unparalleled dining experience
            that captures the raw beauty of Morocco. Guests can enjoy exquisite
            culinary creations while taking in panoramic views of the arid,
            stone desert, making it a must-visit destination for those who want
            to dine in one of the {"world's"} most unique natural settings.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Beyond exceptional dining, Casa Lalla serves as your gateway to
            premium desert activities. We understand that a trip to the Agafay
            region is about the complete experience, which is why we seamlessly
            integrate thrilling adventures with our top-tier hospitality. Before
            sitting down to a meal, guests can explore the rugged terrain
            through guided quad biking excursions, traditional camel rides, or
            peaceful nature walks. This perfect balance of adrenaline and
            relaxation ensures that every visitor makes the most of their desert
            journey.
          </p>

          <p className="text-[15px] leading-[25.5px] font-light text-casa_black mt-4">
            As the sun begins to set, the true magic of the best restaurant on
            the Agafay Desert comes to life. The fading light casts golden hues
            across the landscape, providing a breathtaking backdrop for our
            open-air dining space. Under a canopy of stars, you can unwind in a
            tranquil, atmospheric setting, enjoying a flawless blend of
            world-class service, desert activities, and an unforgettable
            culinary journey at Casa Lalla.
          </p>
        </article>

        {/* Right Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-gallery/restaurants-marocain-marrakech-garden.webp"
            alt="Authentic Moroccan hospitality and traditional riad-style architecture at the Casa Lalla Takerkoust oasis."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
          <Image
            src="/agafay-gallery/restaurants-marocain-marrakech-show.webp"
            alt="Relaxing outdoor swimming pool overlooking the breathtaking Lalla Takerkoust Lake and desert landscape."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
