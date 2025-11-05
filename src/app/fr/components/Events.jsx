import React from "react";
import Image from "next/image";
import Link from "next/link";

const Events = () => {
  return (
    <div className="relative w-full h-[137vh] lg:h-[110vh]">
      <div className="absolute z-20 left-0 lg:left-40 w-[90%] lg:w-[43%] h-fit flex flex-col justify-center items-start gap-5  p-5 lg:p-10 top-[320px] lg:top-1/2 -translate-y-0 lg:-translate-y-1/2 bg-[#EDE5D9]">
        <h1 className="font-lora text-[22px] leading-[32.4px] text-casa_black">
          Événements Privés & Mariages au Restaurant Casa Lalla Takerkoust
        </h1>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          La vue exceptionnelle de notre <strong>paysage naturel</strong> est{" "}
          <strong>la scène</strong> parfaite pour votre{" "}
          <strong>événement</strong> ou votre <strong>célébration</strong>.{" "}
          {`Qu'il s'agisse d'un `}
          <strong>mariage</strong>
          {`, d'un `}
          <strong>anniversaire</strong>, {` d'une `}
          <strong>séance photo</strong> {` ou d'un `}
          <strong>événement de marque</strong>, vous pouvez vous approprier{" "}
          <strong>Casa Lalla</strong> pour vivre un moment inoubliable. Que ce
          soit en toute intimité ou en grand, notre concept spécial vous
          permettra de donner vie à votre imagination en toute simplicité.
        </p>
        <p className="font-light text-[15px] leading-[25.5px] text-casa_black">
          Accueillez vos moments inoubliables à{" "}
          <strong>Casa Lalla Takerkoust</strong>
          {`, où l’élégance raffinée
          rencontre la tranquillité du `}
          <strong>lac</strong>
          {`. Qu’il s’agisse d’un`} <strong>mariage intime</strong>
          {`, d’un `}
          <strong>dîner privé</strong>
          {` ou
          d’un `}
          <strong>événement professionnel</strong>, notre cadre serein offre la
          toile de fond idéale pour votre <strong>célébration</strong>. Profitez
          de <strong>menus personnalisés</strong>
          {` élaborés par nos
          chefs, d’un décor élégant inspiré du `}
          <strong>charme marocain</strong>{" "}
          {`et d’une atmosphère chaleureuse qui transforme chaque`}{" "}
          <strong>événement</strong> en un souvenir impérissable. À{" "}
          <strong>Casa Lalla Takerkoust</strong>
          {`, nous transformons chaque
          occasion spéciale en une expérience de goût, de beauté et d’émotion.`}
        </p>
        <Link
          href="/fr/private-events"
          className="font-lora italic text-[15px] leading-[25.5px] text-casa_scarlet hover:text-casa_scarlet_opacity group relative inline-block no-underline"
        >
          <span className="relative z-10">Découvrez plus</span>
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-[90%] origin-left scale-x-0 bg-casa_scarlet transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus:scale-x-100"
            aria-hidden="true"
          ></span>
        </Link>
      </div>
      <div className="z-10 absolute right-0 w-[90%] lg:w-1/2 h-full">
        <Image
          src="/images/casalallatakerkoust-vibes-agafay.jpg"
          alt="casa lalla takerkoust, agafay vibes"
          width={500}
          height={500}
          className="object-cover h-[400px] lg:h-[110vh]"
        />
      </div>
    </div>
  );
};

export default Events;
