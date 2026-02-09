import React from "react";
import Link from "next/link";

const Content = () => {
  return (
    <section
      id="our-philosophy"
      className="w-full flex flex-col justify-center items-center gap-4 py-24 lg:py-32 px-5 lg:px-80 text-center"
    >
      <h1 className="font-canela text-[40px] leading-[42px] text-casa_black">
        Casa Lalla Takerkoust : Un Voyage Culinaire {"d'exception"}
      </h1>

      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black mt-8 px-0 lg:px-14 text-justify">
        Découvrez{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          le meilleur de Marrakech
        </strong>{" "}
        à seulement quelques minutes de la ville.{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla Takerkoust
        </strong>{" "}
        vous invite à un voyage à travers la riche culture culinaire et les
        saveurs vibrantes de la Méditerranée.
      </p>
      <h2 className="font-lora text-[18px] leading-[32.5px] text-casa_black italic">
        Une Destination Gastronomique Unique sur le Lac Takerkoust
      </h2>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14 text-justify">
        Situé dans le cadre pittoresque du Barrage, notre établissement est une
        destination unique et haut de gamme. Nous proposons un menu savoureux
        alliant la cuisine internationale raffinée et {"l'authenticité"}{" "}
        {"d'un"}{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          restaurants marocain Marrakech
        </strong>
        . Que vous cherchiez {"l'un"} des top{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          restaurants marocain
        </strong>{" "}
        ou une évasion méditerranéenne, nous vous accueillons dans un cadre à la
        fois détendu et élégant.
      </p>
      <h2 className="font-lora text-[18px] leading-[32.5px] text-casa_black italic">
        La Plus Belle Terrasse face au Désert Agafay
      </h2>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14 text-justify">
        Échappez à {"l'agitation"} de la ville. Notre vaste{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          terrasse
        </strong>{" "}
        offre une vue panoramique imprenable sur le scintillant{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Lac Takerkoust
        </strong>{" "}
        et les étendues du{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          désert
        </strong>{" "}
        environnant. {"C'est"} le décor idéal pour un déjeuner ensoleillé ou un
        dîner romantique, imprégné des fameuses{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Agafay vibes
        </strong>
        .
      </p>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14 text-justify">
        En privilégiant des produits frais et locaux,{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          Casa Lalla
        </strong>{" "}
        offre une expérience culinaire authentique qui rivalise avec les{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          meilleurs restaurants à Marrakech
        </strong>
        . Nos chefs subliment les saveurs de la région pour faire de chaque plat
        une célébration.
      </p>
      <h2 className="font-lora text-[18px] leading-[32.5px] text-casa_black italic">
        Lounge Bar & Atmosphère Sophistiquée
      </h2>
      <p className="text-[15px] leading-[25.5px] italic font-light text-casa_black px-0 lg:px-14 text-justify">
        En tant que lounge bar, Casa Lalla Takerkoust est {"l'endroit"} parfait
        pour se détendre entre amis, en famille ou entre collègues. Profitez de
        notre large sélection de cocktails créatifs, de vins premium et autres
        boissons. Si vous êtes en quête de{" "}
        <strong className="text-casa_scarlet underline underline-offset-[5px] decoration-[0.5px]">
          restaurants marocain Marrakech
        </strong>
        offrant à la fois une cuisine sophistiquée et une atmosphère
        accueillante, vous avez trouvé votre adresse.
      </p>
      <Link
        href="/fr/reservation"
        className={`mt-5 tracking-[0.2em] text-[11px] font-medium uppercase py-2.5 px-4 transition-all duration-300 ease-in-out border-2 border-casa_scarlet text-casa_scarlet hover:bg-casa_scarlet hover:text-casa_background rounded-full`}
      >
        Réservation
      </Link>
    </section>
  );
};

export default Content;
