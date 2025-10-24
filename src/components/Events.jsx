import React from "react";
import Image from "next/image";

const Events = () => {
  return (
    <section className="bg-red-400 py-16 h-fit">
      <div className="relative w-full flex flex-col md:flex-row items-center gap-10 px-6 md:px-20">
        {/* Text Section */}
        <div className="absolute top-5 left-7 md:w-1/2 bg-[#f8f3eb] p-10 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6">
            MM Beach Club
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Discover the exclusive MM Beach Club Restaurant – a private
            sanctuary along the Miami River inspired by the iconic allure of
            Mediterranean beach clubs.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Reserved for our members only, MM Beach Club brings the essence of
            the Mediterranean to Miami with dockside access, providing an
            idyllic escape for al fresco dining that evolves seamlessly from day
            to night.
          </p>

          <div className="space-y-2">
            <a
              href="#"
              className="block text-red-700 italic hover:text-red-900 transition-colors"
            >
              Discover More
            </a>
            <a
              href="#"
              className="block text-red-700 italic hover:text-red-900 transition-colors"
            >
              Membership Information
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute top-5 right-7 md:w-1/2">
          <Image
            src="https://cdn.pixabay.com/photo/2025/03/28/11/00/marrakech-9498604_1280.jpg"
            alt="MM Beach Club"
            width={500}
            height={500}
            className="w-full h-screen shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
