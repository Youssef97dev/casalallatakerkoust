import React from "react";
import Link from "next/link";
import Image from "next/image";

function Content() {
  return (
    <section
      id="contact"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 px-3 lg:px-40 pt-24"
    >
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <h1 className="text-[35px] leading-[42px] font-canela text-casa_black">
          Reserve online
        </h1>
        <Link
          href="/reservation"
          className={`tracking-[0.2em] mt-2 uppercase text-[11px] font-medium  py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full hover:bg-casa_scarlet hover:text-casa_background`}
        >
          Book Here
        </Link>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          Customer Service |{" "}
          <Link
            href="https://wa.me/212675480103"
            target="_blank"
            className="text-casa_scarlet underline underline-offset-4"
          >
            +212 675-480103
          </Link>
        </p>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          Email Address |{" "}
          <Link
            href="mailto:reservations@casalallatakerkoust.com"
            className="text-casa_scarlet underline underline-offset-4"
          >
            reservations@casalallatakerkoust.com
          </Link>
        </p>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <h1 className="text-[35px] leading-[42px] font-canela text-casa_black">
          Our Location
        </h1>
        <Link
          href="https://maps.app.goo.gl/n6jVMNXSKJzRcuMv7"
          target="_blank"
          className="text-[15px] leading-[25.5px] font-light text-casa_scarlet underline underline-offset-4"
        >
          Lalla Takerkoust, Marrakech 40000 Morocco
        </Link>
        <p className="text-[15px] leading-[25.5px] font-light text-casa_black text-center">
          Open Everyday <br />
          Opening hours : 13:00 PM to 17:00 PM
        </p>
        <Link href="https://maps.app.goo.gl/W2KBNPAQ7UNFHhJx5">
          <Image
            src="/map-casa-lalla.png"
            alt="casa lalla takerkoust location"
            width={500}
            height={500}
            className="object-cover w-[400px]"
          />
        </Link>
      </div>
    </section>
  );
}

export default Content;
