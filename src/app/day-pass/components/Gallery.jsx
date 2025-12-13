import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/images/lake-15.jpg",
    class: "object-center",
  },
  {
    image: "/images/lake-24.jpg",
    class: "object-bottom",
  },
  {
    image: "/images/lake-10.jpg",
    class: "object-top",
  },
  {
    image: "/images/casalalla-restaurant-agafay.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-vibes-agafay-activities-5.jpg",
    class: "object-bottom",
  },
];

const Gallery = () => {
  return (
    <section className="px-5 md:px-14 py-12 space-y-8 pt-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-5">
        {GalleryImage.map((category, index) => (
          <div key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full aspect-square ">
              <Image
                src={category.image}
                alt="Gallery Pure House On The Lake, Agafay, Agavay Vibes, Lalla Takerkoust"
                fill
                className={`object-cover aspect-square h-full ${category.class}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
