import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-24 w-full flex flex-col justify-center items-center gap-5">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <Image
          src="/casa-lalla-scarlet.png"
          alt="Casa Lalla takerkoust"
          width={500}
          height={500}
          className="w-28"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Left Section */}
        <div className="w-full flex flex-col items-center lg:items-start justify-start gap-4 text-[15px] leading-[25.5px] text-casa_black font-light mt-2">
          <p>
            <Link href="#" className="underline">
              Lalla Takerkoust,
            </Link>
          </p>
          <p>
            <Link href="#" className="underline">
              Marrakech 40000 Morocco
            </Link>
          </p>
          <p className="underline">Opening hours : 1:00 PM to 10:00 PM</p>
        </div>

        {/* Center Section */}
        <div className="w-full flex flex-col items-center justify-between gap-6 mt-2">
          {/* Links */}
          <nav className="text-[14px] leading-[25.5px] text-casa_black font-light tracking-wider space-x-2">
            <Link href="#" className="underline">
              RESTAURANT
            </Link>{" "}
            |
            <Link href="#" className="underline">
              ACTIVITIES
            </Link>{" "}
            |
            <Link href="#" className="underline">
              RESERVATION
            </Link>{" "}
            |
            <Link href="#" className="underline">
              CONTACT
            </Link>
          </nav>

          <div className="w-14 h-[1.8px] bg-[#8b3a2b] mx-auto my-2"></div>

          {/* Instagram Icon */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b3a2b] hover:text-[#a04630] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.6}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.75 2.75h8.5A5.75 5.75 0 0122 8.5v7a5.75 5.75 0 01-5.75 5.75h-8.5A5.75 5.75 0 012 15.5v-7A5.75 5.75 0 017.75 2.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.25 12a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"
              />
            </svg>
          </Link>

          <p className="text-[15px] leading-[25.5px] font-light uppercase tracking-wider text-casa_black mt-2">
            © 2025, CASA LALLA TAKERKOUST
          </p>
        </div>

        {/* Right Section */}
        <div className="pl-0 lg:pl-12 w-full flex flex-col items-center md:items-start justify-start gap-4">
          <h3 className="text-[25px] leading-[32.5px] font-canela text-casa_black">
            Stay up to date
          </h3>
          <p className="text-[15px] font-light text-casa_black">
            Sign up to receive CASA LALLA TAKERKOUST newsletter.
          </p>

          <form className="w-full max-w-xs">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-[#8b3a2b] focus:outline-none focus:border-[#a04630] py-2 text-sm text-casa_black"
            />
            <button
              type="submit"
              className="mt-4 border-2 border-[#8b3a2b] text-[#8b3a2b] px-8 py-1.5 rounded-full text-sm tracking-wider hover:bg-[#8b3a2b] hover:text-white transition"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
