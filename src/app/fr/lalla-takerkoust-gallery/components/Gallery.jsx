import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-7.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-gallery-8.jpg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-small-1.jpeg",
    class: "object-center",
  },
  {
    image: "/images/DSC01667--.jpg",
    class: "object-center",
  },
  {
    image: "/images/DSC01910--.jpg",
    class: "object-center",
  },
  {
    image: "/images/DSC08639--.jpeg",
    class: "object-center",
  },
  {
    image: "/images/lake-15.jpg",
    class: "object-center",
  },
  {
    image: "/images/lake-24.jpg",
    class: "object-center",
  },
  {
    image: "/images/casa-lalla-activities-desert.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-activities-5.jpg",
    class: "object-center",
  },
  {
    image: "/images/DSC01922--.jpg",
    class: "object-center",
  },
  {
    image: "/images/DSC01923--.jpg",
    class: "object-center",
  },
  {
    image: "/images/DSC01944--.jpg",
    class: "object-center",
  },
  {
    image: "/images/DSC01955.jpg",
    class: "object-center",
  },
  {
    image: "/images/DSC08781--.jpeg",
    class: "object-center",
  },
  {
    image: "/images/DSC08786--.jpeg",
    class: "object-center",
  },
  {
    image: "/images/DSC08787--.jpeg",
    class: "object-center",
  },
  {
    image: "/images/DSC08790--.jpeg",
    class: "object-center",
  },
  {
    image: "/images/DSC08792--.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-booking-agafay.jpeg",
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
