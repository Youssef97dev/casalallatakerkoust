import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section
      id="activities"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
    >
      <h1 className="font-canela text-[35px] leading-[42px] text-casa_black mx-8 lg:mx-56">
        A unique destination for adventure and relaxation by Lalla Takerkoust
        Lake
      </h1>
      <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
        Activities at Casa Lalla Takerkoust
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 10 mt-8">
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-takerkoust/quad-tour-agafay-desert-marrakech.webp"
            alt="Feeling the adrenaline rush on a high-speed quad or buggy bike tour in Agafay vibes"
            width={500}
            height={500}
            className="object-cover w-full h-full aspect-[3/4]"
          />
          <Image
            src="/agafay-takerkoust/adrenaline-quad-biking-marrakech-desert.webp"
            alt="Feeling the adrenaline rush on a high-speed quad or buggy bike tour in Agafay vibes"
            width={500}
            height={500}
            className="object-cover w-full h-full aspect-[3/4]"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Discover a world of adventure and tranquility at{" "}
            <strong>Casa Lalla Takerkoust</strong>. Surrounded by the
            breathtaking lake, the <strong>Agafay Desert</strong>, and the
            majestic <strong>High Atlas Mountains</strong>, our range of
            activities offers something for every kind of traveler from
            thrill-seekers to nature lovers.
          </p>
          <div className="text-[15px] leading-[25.5px] font-light text-casa_black">
            <ul className="list-disc list-inside mt-5 pl-8 space-y-3">
              <li>
                <strong>Transportation</strong>, Lalla Takerkoust is easily
                accessible by taxi or bus from Marrakech. Whether you’re
                planning a day trip or a weekend escape, reaching Casa Lalla
                Takerkoust is simple and convenient..
              </li>
              <li>
                <strong>Quad / Buggy Tour</strong>, Satisfy your need for speed
                with an exhilarating quad or buggy tour around Lalla Takerkoust.
                Take in the breathtaking views as experienced local guides lead
                you off the beaten path through the foothills of the High Atlas
                Mountains.
              </li>
              <li>
                <strong>Jetski</strong>, Get your heart racing with a jet ski
                adventure across the scenic Lalla Takerkoust Lake. Glide over
                the crystal-clear waters and enjoy the stunning backdrop of the
                snow-capped Atlas Mountains — a truly unforgettable experience.
              </li>

              <li>
                <strong>Nature Walk / Hike</strong>, Reconnect with nature on a
                guided walk or hike around Lalla Takerkoust. Discover the
                diverse flora and fauna of this unique landscape, choose between
                a leisurely stroll or a more challenging mountain trail, and
                enjoy a tranquil escape from the bustle of Marrakech — perfect
                for birdwatchers and photographers.
              </li>

              <li>
                <strong>Horseback Riding</strong>,Experience the magic of
                horseback riding around Lalla Takerkoust Lake. Journey along
                peaceful lakeside paths and into the foothills of the Atlas
                Mountains and Agafay’s stone desert, exploring Morocco’s natural
                beauty in the most timeless way.
              </li>

              <li>
                <strong>Agafay Desert</strong>, Just 5 minutes away from Lalla
                Takerkoust lies the stunning Agafay Desert, one of Morocco’s
                most exciting adventure destinations.
                <br />
                Explore the rocky terrain by quad, buggy, or camel, and immerse
                yourself in a landscape that feels straight out of a dream.
              </li>

              <li>
                <strong>Bike Tour</strong>, Explore Lalla Takerkoust on a bike
                tour through the Agafay Desert, leading you to the oasis-like
                lake and the majestic High Atlas Mountains. A refreshing and
                unforgettable experience that combines adventure, nature, and
                stunning scenery.
              </li>
            </ul>
          </div>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Whether you seek adventure, relaxation, or discovery, Casa Lalla
            Takerkoust invites you to explore Morocco’s natural beauty through
            unforgettable experiences right at our doorstep.
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-takerkoust/quad-bike-tour-agafay-desert-adventure.webp"
            alt="Navigating winding off-road trails on a quad bike in the Marrakech desert"
            width={500}
            height={500}
            className="object-cover w-full h-full aspect-[3/4]"
          />
          <Image
            src="/agafay-takerkoust/luxury-tour-experience-casa-lalla-takerkoust.webp"
            alt="Navigating winding off-road trails on a quad bike in the Agafay desert"
            width={500}
            height={500}
            className="object-cover w-full  h-full aspect-[3/4]"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
