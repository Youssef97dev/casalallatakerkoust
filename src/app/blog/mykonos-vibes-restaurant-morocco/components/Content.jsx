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
          Experience Mykonos Vibes in Morocco: Lakeside Restaurant at Casa Lalla
        </h1>
        <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
          Mediterranean Aesthetics Meet Moroccan Charm
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
            Step into a world of whitewashed elegance and chic bohemian luxury
            at Casa Lalla, where you can authentically experience Mykonos vibes
            in Morocco. Situated right on the {"water's"} edge, our premier
            lakeside restaurant perfectly captures the iconic aesthetic of the
            Greek Isles while maintaining the warm, welcoming spirit of North
            Africa. With crisp white decor, natural textures, and a breezy,
            open-air layout, we have created a stunning visual oasis that feels
            entirely removed from the ordinary.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Our lakeside restaurant is designed for those who appreciate upscale
            waterfront dining paired with a relaxed, sophisticated atmosphere.
            As you look out over the tranquil waters of Lake Takerkoust, the
            carefully curated environment evokes the sensation of lounging at an
            exclusive Mediterranean beach club. The Mykonos vibes are woven into
            every detail, from the stylish sunbeds and shaded pergolas to the
            ambient music that sets a perfectly chilled, daytime rhythm for our
            guests.
          </p>

          <p className="text-[15px] leading-[25.5px] font-light text-casa_black mt-4">
            Casa Lalla is the ultimate destination for capturing photo-ready
            moments and enjoying a serene lifestyle escape. Whether you are
            joining us for a sun-drenched afternoon or a chic sunset gathering,
            our venue offers a luxurious retreat just outside the city. Escape
            to our lakeside restaurant to discover why Casa Lalla is the most
            sought-after location to experience true Mykonos vibes in Morocco.
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
