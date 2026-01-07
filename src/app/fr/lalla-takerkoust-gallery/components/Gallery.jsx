import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-1.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-2.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-3.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-4.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-5.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-6.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-7.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-8.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-akerkoust-culunary.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-booking-agafay.jpeg",
    class: "object-center",
  },
  {
    image: "/images/DSC01611.jpg",
    class: "object-center",
  },
  {
    image: "/images/DSC01610.jpg",
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
