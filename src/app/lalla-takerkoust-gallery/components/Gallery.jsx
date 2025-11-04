import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-small-3.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-small-2.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-vibes-agafay-events.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casa-lalla-takerkoust-private-events.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-activities-2.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-agafay-vibes-activities-3.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-akerkoust-culunary.jpeg",
    class: "object-center",
  },
  {
    image: "/images/casalalla-takerkoust-culunary2.jpeg",
    class: "object-center",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/00/marrakech-9498600_1280.jpg",
    class: "object-center",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/48/agafay-9498707_1280.jpg",
    class: "object-center",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/00/marrakech-9498619_960_720.jpg",
    class: "object-center",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/48/agafay-9498706_1280.jpg",
    class: "object-center",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/00/marrakech-9498615_1280.jpg",
    class: "object-center",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/48/agafay-9498709_1280.jpg",
    class: "object-center",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/48/agafay-9498708_1280.jpg",
    class: "object-center",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2025/03/28/11/48/agafay-9498719_1280.jpg",
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
