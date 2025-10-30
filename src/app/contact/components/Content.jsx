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
          href="/booking"
          className={`tracking-[0.2em] mt-2 uppercase text-[11px] font-medium  py-3 px-5 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet rounded-full hover:bg-casa_scarlet hover:text-casa_background`}
        >
          Book Here
        </Link>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          Customer Service |{" "}
          <span className="text-casa_scarlet underline underline-offset-4">
            +212 675-480103
          </span>
        </p>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          Email Address |{" "}
          <span className="text-casa_scarlet underline underline-offset-4">
            reservations@casalallatakerkoust.com
          </span>
        </p>
      </div>
      <div className="w-full flex flex-col justify-start items-center gap-5">
        <h1 className="text-[35px] leading-[42px] font-canela text-casa_black">
          Our Location
        </h1>
        <h2 className="text-[15px] leading-[25.5px] font-light text-casa_scarlet underline underline-offset-4">
          Lalla Takerkoust, Marrakech 40000 Morocco
        </h2>
        <p className="text-[15px] leading-[25.5px] font-light text-casa_black text-center">
          Open Thursday to Sunday <br />
          Opening hours : 1:00 PM to 10:00 PM
        </p>
        <Link href="https://maps.app.goo.gl/W2KBNPAQ7UNFHhJx5">
          <Image
            src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761830575/Plant-1_v7h1zm.png"
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
