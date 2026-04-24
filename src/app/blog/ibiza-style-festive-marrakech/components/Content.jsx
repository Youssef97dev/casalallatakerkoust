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
          Casa Lalla Takerkoust: Ibiza-Style Festive Dining Near Marrakech
        </h1>
        <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
          The Ultimate Festive Atmosphere on Lake Takerkoust
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
            If you are searching for the perfect blend of vibrant energy and
            breathtaking scenery, Casa Lalla Takerkoust delivers the premier
            Ibiza-style festive dining experience near Marrakech. Located just a
            short drive from the bustling city center, our lakeside venue
            transports guests to a world of rhythmic beats, chic decor, and an
            unmatched celebratory atmosphere. We have crafted a unique
            destination where the high-energy vibe of the Mediterranean
            seamlessly merges with the stunning natural beauty of the Moroccan
            landscape.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            At the heart of our Ibiza-style festive dining concept is a
            commitment to creating unforgettable moments for our guests. From
            the moment you arrive at the shores of Lake Takerkoust, you are
            immersed in a sensory experience featuring curated music, stylish
            lounging areas, and a lively, sophisticated crowd. Whether you are
            planning a weekend getaway, a special celebration, or simply seeking
            an upbeat escape from the city, our vibrant environment offers the
            exact energetic rhythm you are looking for.
          </p>

          <p className="text-[15px] leading-[25.5px] font-light text-casa_black mt-4">
            Casa Lalla is more than just a destination; it is the ultimate
            lifestyle retreat. By pairing our festive dining atmosphere with
            panoramic lake views, we provide a day-to-night transition that
            rivals the best beach clubs in the world. Reserve your table to
            experience the magnetic energy, exceptional service, and vibrant
            ambiance that makes Casa Lalla the top choice for Ibiza-style dining
            near Marrakech.
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
