import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section
      id="events"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
    >
      <h1 className="font-canela text-[35px] leading-[42px] text-casa_black mx-8 lg:mx-56">
        An exceptional venue for unforgettable events by the lake
      </h1>
      <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
        Plan your next event with us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 10 mt-8">
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761828221/casalalla-takerkoust-agafay-private-event-1_jfaibi.jpg"
            alt="casa lalla takerkoust, agafay vibes, private events"
            width={500}
            height={500}
            className="object-cover w-full"
          />
          <Image
            src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761828221/casalalla-takerkoust-agafay-private-event-2_t8j0yv.jpg"
            alt="casa lalla takerkoust, agafay vibes, private events"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            <strong>CASA LALLA TAKERKOUST</strong> offers the perfect setting
            for both intimate gatherings and grand <strong>celebrations</strong>
            , surrounded by the breathtaking landscapes of{" "}
            <strong>Lalla Takerkoust Lake</strong>. Whether you’re hosting a{" "}
            <strong>private dinner</strong>, a{" "}
            <strong>corporate retreat</strong>, a wedding, or a special
            celebration, our dedicated team is here to craft a personalized and
            unforgettable <strong>experience</strong>.
          </p>
          <div className="text-[15px] leading-[25.5px] font-light text-casa_black">
            <p>
              Choose from a selection of unique spaces within{" "}
              <strong>Casa Lalla Takerkoust</strong>, each designed to create
              the perfect ambiance for your <strong>event</strong> from{" "}
              <strong>cozy dinners</strong> to{" "}
              <strong>large celebrations</strong>:
            </p>
            <ul className="list-disc list-inside mt-5 pl-8 space-y-3">
              <li>
                <strong>The Refined Restaurant</strong>, an elegant indoor space
                ideal for intimate dining and special occasions.
              </li>
              <li>
                <strong>The Lakeside Restaurant</strong>, offering a warm and
                elegant ambiance perfect for group gatherings, family
                celebrations, and refined dining experiences.
              </li>
              <li>
                <strong>The Panoramic Terrace</strong>, with open-air views of
                the lake and mountains perfect for sunset cocktails or outdoor
                receptions.
              </li>
            </ul>
          </div>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Each space at <strong>Casa Lalla Takerkoust</strong> combines
            natural beauty, refined design, and warm hospitality — ensuring
            every event becomes a truly <strong>memorable experience</strong>.
          </p>
          <h1 className="font-canela text-[25px] leading-[32.5px] text-casa_black mt-0">
            Contact Us to Book Your Event
          </h1>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Discover why <strong>Casa Lalla Takerkoust</strong> is one of{" "}
            <strong>Marrakech’s</strong> most exclusive destinations for{" "}
            <strong>
              private dining, weddings, corporate events, and special
              celebrations
            </strong>
            . Whether you’re envisioning an <strong>intimate dinner</strong> by
            the lake or a sunset <strong>cocktail party</strong> on the terrace,
            our team is here to bring your vision to life.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Contact Casa Lalla Takerkoust today to start planning your
            unforgettable event. Simply fill out our event inquiry form, and our
            dedicated team will get in touch within 48 hours to help create a
            truly unique experience tailored just for you.
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761827999/casalalla-takerkoust-agafay-private-event-3_womf26.jpg"
            alt="casa lalla takerkoust, agafay vibes, private events"
            width={500}
            height={500}
            className="object-cover w-full"
          />
          <Image
            src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761834761/lalla-takerkoust-agafay-events-4_mfzqbv.webp"
            alt="casa lalla takerkoust, agafay vibes, private events"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
