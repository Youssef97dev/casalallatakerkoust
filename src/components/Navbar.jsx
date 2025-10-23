"use client";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdLanguage } from "react-icons/md";

const Navbar = ({ path, change = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <nav
        className={`fixed z-50 w-full transition-colors duration-300 py-0 flex flex-col justify-center items-center ${
          scrolled || change
            ? "bg-casa_background"
            : "bg-transparent text-white"
        }`}
      >
        <div className="w-full flex justify-center items-center mx-auto px-5 lg:px-10 ">
          <div
            className={`cursor-pointer w-[26%] text-[18px] lg:text-[30px]`}
          ></div>
          <div className="w-[48%] flex justify-center items-center pb-1 z-20">
            <Link href="/">
              <Image
                src={
                  scrolled || change
                    ? "/casa-lalla-scarlet-agafay.png"
                    : "/casa-lalla-background.png"
                }
                width={300}
                height={300}
                alt="Logo casa lalla takerkoust, agafay vibes, agafay desert, takerkoust"
                className={`py-2 w-20`}
              />
            </Link>
          </div>
          <div className="flex lg:justify-start justify-end items-center gap-5 w-[26%] z-20">
            <div className="w-full lg:flex hidden justify-end items-center  text-white cursor-pointer">
              <Link
                href="#"
                className={`w-full rounded-full text-center uppercase lg:w-[60%] tracking-[0.1em] lg:tracking-[0.2em]  text-[12px] leading-[12px] py-3 px-2 transition-all duration-300 ease-in-out ${
                  scrolled || change
                    ? "text-casa_scarlet bg-casa_background hover:bg-casa_scarlet hover:text-casa_background border-2 border-casa_scarlet"
                    : "text-casa_background bg-transparent hover:bg-casa_background hover:text-casa_scarlet border-2 border-casa_background"
                }`}
              >
                Reservations
              </Link>
            </div>
            <div
              className={`cursor-pointer  text-[35px] ${
                scrolled || change
                  ? "text-casa_scarlet"
                  : "text-casa_background"
              }`}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {!isOpen ? <IoIosMenu /> : <IoMdClose />}
            </div>
            {/*<div
              className="relative lg:block hidden"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <button
                className={`font-light tracking-widest flex justify-center items-center text-[12px] gap-2 pb-1 ${
                  scrolled || change ? "text-riad_primary" : "text-white"
                }`}
              >
                <MdLanguage size={20} />
                <div className="">
                  <RiArrowDownSLine size={18} />
                </div>
              </button>
              {isDropdownOpen && (
                <ul className="absolute rounded top-8 -left-12 bg-riad_background mt-2 py-1 w-28 shadow-lg flex justify-center items-center">
                  <li className="px-4 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary transition-all duration-200 ease-in-out font-light text-riad_primary">
                    <Link rel="alternate" hreflang="en" href="#">
                      {"EN"}
                    </Link>
                  </li>
                  <li className="px-4 py-2 rounded-lg cursor-pointer hover:bg-riad_secondary transition-all duration-200 ease-in-out font-light text-riad_primary">
                    <Link rel="alternate" hreflang="fr" href={`${path}`}>
                      {"FR"}
                    </Link>
                  </li>
                </ul>
              )}
            </div>*/}
          </div>
          {/* Full-screen mobile menu */}
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500"
          enterFrom="transform -translate-y-full opacity-0"
          enterTo="transform -translate-y-0 opacity-100"
          leave="transition ease-in duration-500"
          leaveFrom="transform -translate-y-0 opacity-100"
          leaveTo="transform -translate-y-full opacity-0"
        >
          <div
            className={`z-10 w-full h-fit lg:flex items-center justify-center gap-4 px-5 mx-auto lg:px-10 py-1 hidden ${
              scrolled || change
                ? "bg-casa_background text-casa_scarlet"
                : "bg-transparent text-white"
            }`}
          >
            <ul className="flex justify-center items-center gap-3 uppercase text-[12px] leading-[36px] font-light">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Restaurant</Link>
              </li>
              <li>
                <Link href="#">Events</Link>
              </li>
              <li>
                <Link href="#">Activities</Link>
              </li>
              <li>
                <Link href="#">Gallery</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <div
                  className="relative lg:block hidden"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <button
                    className={`font-light tracking-widest flex justify-center items-center text-[12px] gap-2 pb-1 ${
                      scrolled || change ? "text-riad_primary" : "text-white"
                    }`}
                  >
                    <MdLanguage size={20} />
                    <div className="">
                      <RiArrowDownSLine size={18} />
                    </div>
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute rounded top-8 -left-2 bg-casa_background mt-0 py-2 w-20 shadow-lg flex justify-center items-center gap-1">
                      <li className="px-2 py-0 rounded-lg cursor-pointer hover:bg-casa_scarlet hover:text-casa_background transition-all duration-200 ease-in-out font-light text-casa_scarlet">
                        <Link rel="alternate" hreflang="en" href="#">
                          {"EN"}
                        </Link>
                      </li>
                      <li className="px-2 py-0 rounded-lg cursor-pointer hover:bg-casa_scarlet hover:text-casa_background transition-all duration-200 ease-in-out font-light text-casa_scarlet">
                        <Link rel="alternate" hreflang="fr" href={`${path}`}>
                          {"FR"}
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </Transition>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-400"
          enterFrom="transform -translate-x-full opacity-0"
          enterTo="transform -translate-x-0 opacity-100"
          leave="transition ease-in duration-400"
          leaveFrom="transform -translate-x-0 opacity-100"
          leaveTo="transform -translate-x-full opacity-0"
        >
          <div className="fixed top-0 left-0 z-50 w-full h-screen bg-casa_background flex flex-col items-left justify-start gap-16 py-6 px-6 uppercase lg:hidden">
            <div
              className="w-full flex justify-end items-center text-casa_scarlet text-[25px]"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose />
            </div>
            <ul
              onClick={() => setIsOpen(false)}
              className="space-y-4 text-casa_scarlet leading-[49px] text-[16px] flex flex-col justify-center items-center font-light"
            >
              <li className="">
                <Link href="/">{"Home"}</Link>
              </li>
              <li className="">
                <Link href="/about">{"About"}</Link>
              </li>
              <li className="">
                <Link href="/events">{"Events"}</Link>
              </li>
              <li className="">
                <Link href="/activities">{"Activities"}</Link>
              </li>
              <li className="">
                <Link href="/gallery">{"Gallery"}</Link>
              </li>
              <li className="">
                <Link href="/contact">{"Contact"}</Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className={`tracking-[0.2em] text-[12px] leading-[34px] py-3 px-4 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full`}
                >
                  Reservations
                </Link>
              </li>
              <ul className="py-2 w-full flex justify-center items-start gap-3">
                <li className="px-2 rounded-lg cursor-pointer">
                  <Link href="#">
                    <Image
                      src="/english.png"
                      width={100}
                      height={100}
                      alt="Pure house on the lake, agafay, agafay vibes, lalla takerkoust"
                      className="w-7 h-7 md:w-7 md:h-7"
                    />
                  </Link>
                </li>
                <li className="px-2 rounded-lg cursor-pointer">
                  <Link rel="alternate" hreflang="fr" href={`${path}`}>
                    <Image
                      src="/france.png"
                      width={100}
                      height={100}
                      alt="Pure house on the lake, agafay, agafay vibes, lalla takerkoust"
                      className="w-7 h-7 md:w-7 md:h-7"
                    />
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </Transition>
      </nav>
    )
  );
};

export default Navbar;
