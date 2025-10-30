import React from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761830020/casalalla-takerkoust-instagram-1_phnv6j.png",
    video: true,
    link: "https://www.instagram.com/p/C017YeRLVBD/",
  },
  {
    src: "https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761830133/casalalla-takerkoust-agafay-instagram-2_vphuia.png",
    video: true,
    link: "https://www.instagram.com/p/DGgDi8UNboO/",
  },
  {
    src: "https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761830244/casalalla-takerkoust-agafay-instagram-3_qoxj5j.png",
    video: true,
    link: "https://www.instagram.com/p/DI9Nuh1M0Yx/",
  },
  {
    src: "https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761830320/casalalla-insta-1_e0s6zb.jpg",
    video: false,
    link: "https://www.instagram.com/p/DHjsxYRoOAP/",
  },
  {
    src: "https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761830393/casalalla-takerkoust-agafay-instagram-4_izakt2.png",
    video: false,
    link: "https://www.instagram.com/p/DHjsZt_o1DF/",
  },
  {
    src: "https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761830447/casalalla-insta-3_ltgetw.jpg",
    video: false,
    link: "https://www.instagram.com/p/DGlJuUJNAxp/",
  },
];

const InstagramSection = () => {
  return (
    <section className="py-12 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-[25px] leading-[35.2px] font-canela text-casa_black">
          Travel unhurriedly, experiencing refined luxury, a journey marked by
          emotion, culture, and escapism.
        </h2>
        <p className="text-[15px] leading-[25.5px] font-light mt-4 text-casa_black">
          Follow us on Instagram{" "}
          <span className="text-casa_scarlet">@casa.lalla.takerkoust</span>
        </p>
        <div className="w-14 h-[1.8px] bg-casa_scarlet mx-auto mt-8 mb-8"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-2 max-w-7xl mx-auto px-4">
        {images.map((image, index) => (
          <Link key={index} href={image.link}>
            <div className="relative overflow-hidden">
              <Image
                src={image.src}
                alt={`Instagram post ${index + 1}`}
                width={250}
                height={250}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-105"
              />
              {/* Optional play icon overlay */}
              {image.video && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.24v7.52a1 1 0 001.234.97l6.518-3.759a1 1 0 000-1.772z"
                    />
                  </svg>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default InstagramSection;
