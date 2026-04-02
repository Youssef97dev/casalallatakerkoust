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
          Lalla Takerkoust Day Trip Guide: Lake Views, Agafay Vibes &
          Mediterranean Dining
        </h1>
        <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
          Escape the bustling Medina for a serene Marrakech lake getaway filled
          with water sports, desert adventures, and refined culinary
          experiences.
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 mt-8">
        {/* Left Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-gallery/agafay-desert-buggy-tour-marrakech.webp"
            alt="Majestic snow-capped High Atlas Mountains viewed from the scenic terrace at Casa Lalla Takerkoust."
            width={500}
            height={500}
            priority // Added priority if this loads above the fold
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
          <Image
            src="/agafay-gallery/lalla-takerkoust-lake-weather-marrakech.webp"
            alt="Beautiful natural surroundings and lush oasis landscapes bordering the Agafay Desert."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
        </div>

        {/* Center Content Column */}
        <article className="w-full flex flex-col justify-start items-start text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Escaping the intense heat and chaotic energy of the Marrakech Medina
            has never been easier thanks to the tranquil microclimate of Lalla
            Takerkoust. Located just a comfortable 40-minute drive away, this
            breathtaking artificial lake offers the ultimate sensory relief for
            tourists. As a premier destination for a{" "}
            <strong>Lalla Takerkoust day trip from Marrakech</strong>, the
            shimmering blue waters beautifully contrast with the arid, red
            desert earth and the snow-capped peaks of the High Atlas Mountains.
            Whether you book a private transfer or take a shared grand taxi,
            getting here is a seamless transition from urban bustle to pure
            natural serenity.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            For thrill-seekers and nature lovers alike, the sheer variety of
            things to do in Lalla Takerkoust makes it an unparalleled excursion.
            With the recent exceptional rainfall revitalizing the {"lake's"}{" "}
            water levels, visitors can dive into exhilarating aquatic activities
            like jet skiing, kayaking, and paddleboarding across the expansive
            reservoir. If you prefer land-based excitement, you can easily
            transition to <strong>Agafay desert activities</strong>, embarking
            on guided quad biking tours, dune buggy rides, or sunset camel treks
            through the lunar-like rocky hills just minutes from the shoreline.
          </p>

          <p className="text-[15px] leading-[25.5px] font-light text-casa_black mt-4">
            After an action-packed morning, there is no better way to conclude
            your Marrakech lake getaway than by indulging in the {"region's"}{" "}
            finest gastronomy. Casa Lalla Takerkoust stands out among Barrage{" "}
            <strong>Lalla Takerkoust restaurants</strong> by offering an
            upscale, boho-chic lounge atmosphere. Here, you can transition from
            rugged adventure to refined Mediterranean dining, savoring fresh,
            locally sourced ingredients while taking in panoramic views of the
            water and mountains. It is the definitive culinary oasis that turns
            a simple excursion into an unforgettable, luxurious retreat.{" "}
          </p>
        </article>

        {/* Right Images Column */}
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-takerkoust/luxury-trip-from-mamounia-the-lake.webp"
            alt="Scenic panoramic view showcasing the transition from the rocky Agafay Desert to Lalla Takerkoust Lake."
            width={500}
            height={500}
            loading="lazy"
            className="object-cover w-full h-full aspect-[3/4] rounded-md"
          />
          <Image
            src="/agafay-takerkoust/restaurant-lake-view-casa-lalla-takerkoust.webp"
            alt="Peaceful morning landscape of Lalla Takerkoust, a premier nature getaway just outside Marrakech."
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
