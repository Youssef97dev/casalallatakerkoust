import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section
      id="events"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
    >
      <h1 className="font-lora text-[25px] italic leading-[38px] text-casa_black mx-8 lg:mx-56">
        {"Un Lieu d'Exception pour des Événements Inoubliables au Bord du Lac"}
      </h1>
      <h2 className="mt-4 font-lora italic text-[20px] leading-[25px] text-casa_black">
        La Destination Ultime pour vos Mariages et Événements Privés à Agafay
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 10 mt-8">
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-takerkoust/casa-lalla-takerkoust-lake-view-terrace.webp"
            alt="Mediterranean restaurant terrace overlooking Lalla Takerkoust lake at sunset"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-[500px]"
          />
          <Image
            src="/agafay-takerkoust/agafay-desert-marrakech-restaurants.webp"
            alt="Mediterranean restaurant terrace overlooking Lalla Takerkoust lake at sunset"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-[500px]"
          />
          <Image
            src="/agafay-takerkoust/ibiza-mykonos-style-restaurants.webp"
            alt="Panoramic terrace view setup for an Agafay wedding and private events, featuring a chic Ibiza Mykonos style atmosphere by the lake"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-[500px]"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            <strong>Casa Lalla Takerkoust</strong> offre le cadre idéal pour des{" "}
            <strong>événements privés</strong> intimes comme pour de grandes
            célébrations, le tout entouré par les paysages époustouflants du lac
            Lalla Takerkoust. Situé à seulement quelques minutes en voiture de
            la ville, nous offrons une évasion sereine qui rivalise avec les{" "}
            <strong>meilleurs restaurants de Marrakech</strong>, proposant une
            alternative unique à {"l'agitation"} du centre-ville.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Que vous planifiiez un <strong>mariage à Agafay</strong> de rêve,
            une retraite
            {"d'entreprise"} ou une célébration spéciale, notre équipe dévouée
            est là pour créer une expérience personnalisée. En tant que choix
            privilégié pour vos <strong>événements Agafay</strong>, nous allions
            beauté naturelle et hospitalité de classe mondiale, nous
            positionnant comme une référence parmi les{" "}
            <strong>restaurants au bord du lac</strong> et les lieux de
            réception près du <strong>désert {"d'Agafay"}</strong>.
          </p>
          <h2 className=" font-lora italic text-[25px] leading-[25px] text-casa_black">
            Des Espaces Uniques pour Chaque Occasion
          </h2>
          <div className="text-[15px] leading-[25.5px] font-light text-casa_black">
            <p>
              Faites votre choix parmi une sélection {"d'espaces"} uniques au
              sein de <strong>Casa Lalla Takerkoust</strong>. Chacun est conçu
              pour créer une ambiance parfaite, offrant une élégance et un
              confort qui rivalisent avec
              {"n'importe"} quel lieu de{" "}
              <strong>{"mariage en bivouac de luxe (luxury camp)"}</strong> :
            </p>
            <ul className="list-disc list-inside mt-5 pl-8 space-y-3">
              <li>
                <strong>Le Restaurant Raffiné</strong> — Un espace intérieur
                élégant, idéal pour des <strong>événements privés</strong> et
                des dîners intimes. Ici, les invités peuvent profiter {"d'une"}{" "}
                authentique atmosphère de <strong>restaurants marocain</strong>,
                en dégustant les saveurs locales les plus fines dans un cadre
                sophistiqué.
              </li>
              <li>
                <strong>Le Restaurant au Bord du Lac</strong> — Offrant une
                ambiance chaleureuse et élégante, cet espace est parfait pour
                les rassemblements de groupe. Il offre une expérience de{" "}
                <strong>restaurants marocain</strong> qui nous classe
                régulièrement parmi les{" "}
                <strong>top restaurants de Marrakech.</strong>
              </li>
              <li>
                <strong>La Terrasse Panoramique</strong> — Avec une vue
                imprenable sur le lac et les montagnes de {"l'Atlas"},{" "}
                {"c'est l'endroit"} ultime pour des cocktails au coucher du
                soleil ou des réceptions en plein air, offrant un panorama que
                peu de <strong>restaurants à Marrakech</strong> peuvent égaler.
              </li>
            </ul>
          </div>
          <h2 className=" font-lora italic text-[25px] leading-[25px] text-casa_black">
            Activités & Expériences
          </h2>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Au-delà de la restauration, <strong>Casa Lalla Takerkoust</strong>{" "}
            est un véritable centre{" "}
            <strong>{"d'activités et d'aventure"}</strong>. Enrichissez votre
            mariage à Agafay ou votre séminaire en explorant les environs
            spectaculaires. Du quad à travers les dunes du{" "}
            <strong>désert {"d'Agafay"}</strong> au <strong>jet-ski</strong> sur
            le lac, nous pouvons organiser des activités avant ou après{" "}
            {"l'événement"} pour transformer un simple repas en une aventure{" "}
            {"d'une"} journée complète.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Chaque espace de <strong>Casa Lalla Takerkoust</strong> allie beauté
            naturelle, design raffiné et hospitalité chaleureuse — garantissant
            que chaque événement devienne une{" "}
            <strong>expérience mémorable</strong>.
          </p>
          <h1 className="font-lora text-[25px] italic leading-[32.5px] text-casa_black mt-0 text-center">
            Contactez-nous pour Planifier Votre Mariage à Agafay ou Événement
            Privé
          </h1>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Découvrez pourquoi <strong>Casa Lalla Takerkoust</strong> est la
            destination incontournable pour les{" "}
            <strong>mariages dans le désert {"d'Agafay"}</strong> et{" "}
            <strong>les événements privés</strong> exclusifs. Nous offrons une
            atmosphère unique qui fusionne {"l'énergie"} festive du{" "}
            <strong>style Ibiza & Mykonos</strong> avec
            {"l'excellence"} culinaire {"d'un"} grand restaurant marocain.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Que vous recherchiez un lieu capable de rivaliser avec{" "}
            {"l'ambiance"}
            {"d'un"} <strong>mariage en bivouac de luxe</strong>, que vous
            organisiez une retraite
            {"d'entreprise"} ou une soirée cocktail au coucher du soleil, notre
            équipe est là pour donner vie à votre vision.
          </p>
          <h1 className="font-lora text-[25px] leading-[32.5px] text-casa_black mt-0 text-center italic">
            Réservez votre date dans {"l'un"} des meilleurs restaurants de la
            région de Marrakech
          </h1>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Contactez <strong>Casa Lalla Takerkoust</strong> dès {"aujourd'hui"}{" "}
            pour commencer
            {"l'organisation"}. Remplissez simplement notre formulaire de
            demande, et notre équipe dédiée vous répondra sous 48 heures pour
            créer une expérience <strong>événements Agafay</strong> sur mesure,
            rien que pour vous.
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/agafay-takerkoust/boho-chic-interior-design-marrakech-lake.webp"
            alt="Modern minimalist interior design inspired by Ibiza and Formentera at Casa Lalla"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-[500px]"
          />
          <Image
            src="/agafay-takerkoust/high-atlas-mountains-snow-peaks-marrakech.webp"
            alt="Panoramic view of the snow-capped High Atlas Mountains from the desert"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-[500px]"
          />
          <Image
            src="/agafay-takerkoust/meilleur-restaurant-ibiza.webp"
            alt="Luxury dining arrangement for an Agafay wedding or private events, showcasing Ibiza Mykonos style decor and lighting"
            loading="lazy"
            width={500}
            height={500}
            className="object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
