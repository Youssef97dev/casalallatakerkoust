import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <section
      id="activities"
      className="grid grid-cols-1 gap-3 pt-32 pb-12 text-center"
    >
      <h1 className="font-canela text-[35px] leading-[42px] text-casa_black mx-8 lg:mx-56">
        {`Une destination unique pour l’aventure et la détente au bord du lac Lalla Takerkoust.`}
      </h1>
      <h2 className="mt-4 font-canela italic text-[25px] leading-[25px] text-casa_black">
        Activités à Casa Lalla Takerkoust
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-8 px-3 lg:px-14 10 mt-8">
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/images/casalalla-takerkoust-vibes-agafay-activities-2.jpg"
            alt="casa lalla takerkoust, agafay vibes, activities"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
          <Image
            src="/images/casalalla-takerkoust-vibes-agafay-activities-3.jpg"
            alt="casa lalla takerkoust, agafay vibes, activities"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col justify-start items-center text-left gap-10">
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            {`Découvrez un univers d’aventure et de quiétude à`}{" "}
            <strong>Casa Lalla Takerkoust</strong>. Entouré par le spectaculaire
            lac, le <strong>{`désert d’Agafay`}</strong> et les majestueuses{" "}
            <strong>Montagnes du Haut Atlas</strong>
            {`, notre éventail d’activités
            offre quelque chose pour tous les voyageurs, des amateurs de
            sensations fortes aux passionnés de nature.`}
          </p>
          <div className="text-[15px] leading-[25.5px] font-light text-casa_black">
            <ul className="list-disc list-inside mt-5 pl-8 space-y-3">
              <li>
                <strong>Transport</strong> —{" "}
                {`Lalla Takerkoust est facilement
                accessible en taxi ou en bus depuis Marrakech. Que vous
                planifiiez une excursion d’une journée ou une escapade le temps
                d’un week-end, rejoindre Casa Lalla Takerkoust est simple et
                pratique.`}
              </li>
              <li>
                <strong>Tour en Quad / Buggy</strong> —{" "}
                {`Comblez votre envie de
                vitesse avec une excursion exaltante en quad ou en buggy autour
                de Lalla Takerkoust. Profitez de vues à couper le souffle tandis
                que des guides locaux expérimentés vous emmènent hors des
                sentiers battus, à travers les contreforts des Montagnes du Haut
                Atlas.`}
              </li>
              <li>
                <strong>Jet Ski</strong> —{" "}
                {`Faites monter l’adrénaline avec une
                aventure en jet ski sur le magnifique lac de Lalla Takerkoust.
                Glissez sur ses eaux cristallines tout en admirant le décor
                spectaculaire des Montagnes de l’Atlas enneigées — une
                expérience véritablement inoubliable.`}
              </li>

              <li>
                <strong>Promenade Nature / Randonnée</strong> —{" "}
                {`Retissez votre
                lien avec la nature lors d’une marche ou d’une randonnée guidée
                autour de Lalla Takerkoust. Découvrez la flore et la faune
                variées de ce paysage unique, optez pour une balade tranquille
                ou un sentier de montagne plus sportif, et profitez d’une
                escapade paisible loin de l’agitation de Marrakech — parfaite
                pour les passionnés d’ornithologie et de photographie.`}
              </li>

              <li>
                <strong>Balade à Cheval</strong> —{" "}
                {`Vivez la magie d’une
                promenade à cheval autour du lac de Lalla Takerkoust. Parcourez
                des sentiers paisibles au bord de l’eau, puis aventurez-vous
                dans les contreforts des Montagnes de l’Atlas et le désert de
                pierres d’Agafay, pour découvrir la beauté naturelle du Maroc de
                la manière la plus intemporelle.`}
              </li>

              <li>
                <strong>{`Désert d’Agafay`}</strong> —{" "}
                {`À seulement 5 minutes de
                Lalla Takerkoust se trouve le spectaculaire désert d’Agafay,
                l’une des destinations d’aventure les plus fascinantes du Maroc.`}
                <br />
                {`Parcourez ses paysages rocheux en quad, en buggy ou à dos de
                chameau, et plongez dans un décor qui semble tout droit sorti
                d’un rêve.`}
              </li>

              <li>
                <strong>Tour à Vélo</strong> —{" "}
                {`Explorez Lalla Takerkoust lors
                d’un tour à vélo à travers le désert d’Agafay, qui vous mènera
                jusqu’au lac semblable à une oasis et aux majestueuses Montagnes
                du Haut Atlas. Une expérience rafraîchissante et inoubliable,
                mêlant aventure, nature et paysages grandioses.`}
              </li>
            </ul>
          </div>
          <p className="text-[15px] leading-[25.5px] font-light text-casa_black">
            {`Que vous recherchiez l’aventure, la détente ou la découverte, Casa Lalla Takerkoust vous invite à explorer la beauté naturelle du Maroc à travers des expériences inoubliables, juste à deux pas de notre établissement.`}
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-24">
          <Image
            src="/images/casalalla-takerkoust-vibes-agafay-activities-4.jpg"
            alt="casa lalla takerkoust, agafay vibes, activities"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
          <Image
            src="/images/casalalla-takerkoust-vibes-agafay-activities-5.jpg"
            alt="casa lalla takerkoust, agafay vibes, activities"
            width={500}
            height={500}
            className="object-cover w-full  h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
