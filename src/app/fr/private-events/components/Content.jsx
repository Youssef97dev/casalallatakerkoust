import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section
      id="events"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
    >
      <h1 className="font-canela text-[35px] leading-[42px] text-casa_black mx-8 lg:mx-56">
        Un lieu d’exception pour des événements inoubliables au bord du lac
      </h1>
      <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
        Organisez votre prochain événement avec nous
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 10 mt-8">
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/images/casalalla-takerkoust-agafay-vibes-gallery-2.jpg"
            alt="casa lalla takerkoust, agafay vibes, private events"
            width={500}
            height={500}
            className="object-cover w-full"
          />
          <Image
            src="/images/casalalla-takerkoust-agafay-vibes-gallery-6.jpg"
            alt="casa lalla takerkoust, agafay vibes, private events"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            <strong>CASA LALLA TAKERKOUST</strong> offre le cadre idéal pour des
            réunions intimes comme pour de grandes <strong>célébrations</strong>
            , au cœur des paysages à couper le souffle du{" "}
            <strong>lac Lalla Takerkoust</strong>. Que vous organisiez un{" "}
            <strong>dîner privé</strong>, une{" "}
            <strong>{`retraite d’entreprise`}</strong>, un mariage ou une
            occasion spéciale, notre équipe dévouée est là pour créer une{" "}
            <strong>expérience</strong> personnalisée et inoubliable.
          </p>
          <div className="text-[15px] leading-[25.5px] font-light text-casa_black">
            <p>
              {`Choisissez parmi une sélection d’espaces uniques au sein de`}{" "}
              <strong>Casa Lalla Takerkoust</strong>, chacun conçu pour créer
              {`l’ambiance parfaite pour votre `}
              <strong>événement</strong>
              {`, qu’il
              s’agisse de `}
              <strong>dîners intimistes</strong> ou de{" "}
              <strong>grandes célébrations</strong> :
            </p>
            <ul className="list-disc list-inside mt-5 pl-8 space-y-3">
              <li>
                <strong>Le Restaurant Raffiné</strong> — un espace intérieur
                élégant, idéal pour des dîners intimistes et des occasions
                spéciales.
              </li>
              <li>
                <strong>Le Restaurant au Bord du Lac</strong> — offrant une
                ambiance chaleureuse et élégante, parfaite pour les réunions de
                groupe, les célébrations en famille et les expériences
                culinaires raffinées.
              </li>
              <li>
                <strong>La Terrasse Panoramique</strong> — offrant une vue
                imprenable sur le lac et les montagnes, idéale pour des
                cocktails au coucher du soleil ou des réceptions en plein air.
              </li>
            </ul>
          </div>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Chaque espace de <strong>Casa Lalla Takerkoust</strong> allie beauté
            naturelle, design raffiné et hospitalité chaleureuse — garantissant
            que chaque événement devienne une{" "}
            <strong>expérience mémorable</strong>.
          </p>
          <h1 className="font-canela text-[25px] leading-[32.5px] text-casa_black mt-0">
            Contactez-nous pour réserver votre événement
          </h1>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            Découvrez pourquoi <strong>Casa Lalla Takerkoust</strong>
            {` est l’une
            des destinations les plus exclusives de `}
            <strong>Marrakech</strong> pour les{" "}
            <strong>
              {`dîners privés, mariages, événements d’entreprise et célébrations
              spéciales`}
            </strong>
            {`. Que vous rêviez d’un `}
            <strong>dîner intimiste</strong>
            {` au bord du
            lac ou d’un `}
            <strong>cocktail au coucher du soleil</strong> sur la terrasse,
            notre équipe est là pour concrétiser votre vision.
          </p>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            {`Contactez dès aujourd’hui Casa Lalla Takerkoust pour commencer à
            planifier votre événement inoubliable. Il vous suffit de remplir
            notre formulaire de demande d’événement, et notre équipe dévouée
            vous recontactera sous 48 heures pour créer une expérience vraiment
            unique, conçue spécialement pour vous.`}
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="https://res.cloudinary.com/dzg6dnmdp/image/upload/v1761827999/casalalla-takerkoust-agafay-private-event-3_womf26.jpg"
            alt="casa lalla takerkoust, agafay vibes, private events"
            width={500}
            height={500}
            className="object-cover w-full"
          />
          <Image
            src="/images/casalalla-takerkoust-agafay-vibes-gallery-7.jpg"
            alt="casa lalla takerkoust, agafay vibes, private events"
            width={500}
            height={500}
            className="object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
