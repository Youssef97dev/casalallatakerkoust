"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdCloseCircle } from "react-icons/io";

const Flyer = ({ path }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 400);
  }, []);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative rounded-xl animate-[popupShow_0.85s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-80 lg:w-[500px] xl:w-96 mx-auto flex flex-col gap-2">
          {/* Close button */}
          <button
            className="absolute -top-2 -right-2  text-white bg-casa_scarlet rounded-full flex items-center justify-center text-2xl z-10"
            onClick={() => setOpen(false)}
          >
            <IoMdCloseCircle size={28} />
          </button>

          {/* Image */}
          <div className="relative w-full aspect-[9/16]">
            <Image
              src="/images/casalalla-takerkoust-eve.jpeg"
              alt="casa lalla takerkoust event restaurant"
              fill
              className="object-cover rounded-lg "
              priority
            />
          </div>

          {/* Button */}
          <Link
            href={path}
            className="w-full text-center bg-casa_background text-casa_scarlet px-6 py-2 text-[14px] uppercase tracking-[0.20em] font-futura rounded-lg"
          >
            Reservation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Flyer;
