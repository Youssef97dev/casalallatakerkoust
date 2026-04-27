"use client";
import React from "react";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import Link from "next/link";

const Intro = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 pt-28 px-4 lg:px-56">
      <h1 className="text-[35px] leading-[45px] text-center tracking-[2px] text-salama_text font-canela text-casa_scarlet mb-2 px-10">{`Reservation`}</h1>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Spend a perfect day at Casa Lalla Takerkoust.`}</p>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Relax in our peaceful gardens, enjoy our panoramic view overlooking Lake Lalla Takerkoust, and savour a delicious farm-to-table lunch prepared with fresh local ingredients.`}</p>
      <p className="text-[14px] lg:text-[12px] lg:leading-[23px] text-center font-light lg:font-normal tracking-wider leading-[28px] px-4 2xl:px-12 text-salama_text">{`Open every day from 13:00 PM to 17:00 PM, it’s the perfect place to enjoy lunch at any time.`}</p>
      <Link
        href="#"
        onClick={() => setOpen(true)}
        className={`tracking-[0.2em] mt-2 uppercase text-[11px] font-medium  py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full hover:bg-casa_scarlet hover:text-casa_background`}
      >
        Booking
      </Link>
      <BookingModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Intro;
