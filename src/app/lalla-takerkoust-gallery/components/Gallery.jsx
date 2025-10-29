import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "https://casalallatakerkoust.com/gallery/gallery-1.webp",
    class: "object-center",
  },
  {
    image: "https://casalallatakerkoust.com/gallery/gallery-2.webp",
    class: "object-center",
  },
  {
    image: "https://casalallatakerkoust.com/gallery/gallery-4.webp",
    class: "object-center",
  },
  {
    image: "https://casalallatakerkoust.com/images/activities-slide-2.webp",
    class: "object-center",
  },
  {
    image: "https://casalallatakerkoust.com/images/activities-slide-3.webp",
    class: "object-center",
  },
  {
    image: "https://casalallatakerkoust.com/images/about-large.webp",
    class: "object-center",
  },
  {
    image: "https://casalallatakerkoust.com/gallery/gallery-5.webp",
    class: "object-center",
  },
  {
    image: "https://casalallatakerkoust.com/gallery/gallery-7.webp",
    class: "object-center",
  },
  {
    image: "https://casalallatakerkoust.com/gallery/gallery-10.webp",
    class: "object-center",
  },
  {
    image: "https://casalallatakerkoust.com/gallery/gallery-19.webp",
    class: "object-center",
  },
];

const Gallery = () => {
  return (
    <section className="px-5 md:px-14 py-12 space-y-8 pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt="Gallery Pure House On The Lake, Agafay, Agavay Vibes, Lalla Takerkoust"
                fill
                className={`object-cover h-full ${category.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
