import React from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/imageData";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Casa Lalla Takerkoust Gallery",
  description: "Photos of our beautiful location and activities.",
  image: GalleryImage.map((img) => img.image),
};

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="px-0 md:px-14 py-12 space-y-8 pt-[1.5px] lg:pt-14"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-[1.5px]">
        {GalleryImage.map((category, index) => (
          <figure key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt={category.altEn}
                title={category.titleEn}
                priority={index < 10}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover h-full lg:rounded-md ${category.class}`}
              />
            </div>
            {/* Optional: If you ever want to display the image title cleanly */}
            <figcaption className="sr-only">{category.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
