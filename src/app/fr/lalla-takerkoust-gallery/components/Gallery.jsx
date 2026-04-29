import React from "react";
import Image from "next/image";

const GalleryImage = [
  {
    image:
      "/agafay-takerkoust/casa-lalla-takerkoust-restaurant-ibiza-style-marrakech.webp",
    alt: "Restaurant et day club exclusif de style Ibiza au bord du lac Lalla Takerkoust près de Marrakech",
    title:
      "Découvrez un dîner de luxe de style Ibiza au lac Takerkoust à Marrakech",
    class: "object-center",
  },
  {
    image:
      "/agafay-takerkoust/mediterranean-restaurant-atmosphere-marrakech.webp",
    alt: "Atmosphère chic de restaurant méditerranéen avec une ambiance Mykonos à Marrakech",
    title:
      "Oasis de restauration méditerranéenne inspirée de Mykonos près d'Agafay",
    class: "object-center",
  },
  {
    image:
      "/agafay-takerkoust/bohemian-terrace-dining-casa-lalla-takerkoust.webp",
    alt: "Dîner sur terrasse boho-chic à Casa Lalla Takerkoust offrant une expérience de luxe dans le désert",
    title: "Dîner de luxe sur une terrasse bohème aux portes de Marrakech",
    class: "object-center",
  },
  {
    image:
      "/agafay-takerkoust/atlas-mountains-view-from-restaurant-marrakech.webp",
    alt: "Vue imprenable sur les montagnes de l'Atlas depuis un day club et restaurant de luxe à Marrakech",
    title:
      "Vues panoramiques sur les montagnes de l'Atlas depuis notre restaurant au bord du lac",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/spanish-tapas-mediterranean-food-marrakech.webp",
    alt: "Tapas espagnoles gastronomiques et cuisine méditerranéenne servies dans un restaurant haut de gamme de Marrakech",
    title:
      "Tapas espagnoles de qualité supérieure et cuisine méditerranéenne à Marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/signature-cocktails-day-club-marrakech.webp",
    alt: "Cocktails artisanaux signatures dans un day club de luxe au bord du lac Takerkoust avec une ambiance de fête d'Ibiza",
    title:
      "Rafraîchissez-vous avec des cocktails signatures dans notre Day Club à Marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/casa-lalla-takerkoust-entrance-marrakech.webp",
    alt: "Entrée grandiose de Casa Lalla Takerkoust, une oasis de premier plan de style Mykonos près de Marrakech",
    title: "Bienvenue à Casa Lalla Takerkoust : Votre oasis au bord du lac",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/romantic-dinner-agafay-desert-under-stars.webp",
    alt: "Dîner romantique et élégant sous les étoiles dans le désert d'Agafay avec un service de luxe",
    title: "Dîner romantique inoubliable dans le désert sous les étoiles",
    class: "object-center",
  },
  {
    image: "/agafay-takerkoust/tourists-enjoying-drinks-lalla-takerkoust.webp",
    alt: "Touristes internationaux dégustant des verres dans une ambiance de beach club d'Ibiza à Lalla Takerkoust",
    title: "Profitez de l'ambiance des beach clubs d'Ibiza au lac Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/lalla-takerkoust-marrakech-weather-sunset.webp",
    alt: "Dîner au coucher du soleil à l'heure dorée dans un restaurant de luxe du désert d'Agafay sous le climat idéal de Marrakech",
    title:
      "Dîner de luxe au coucher du soleil pendant l'heure dorée près de Marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-day-trip.webp",
    alt: "Plateau de mezze méditerranéen de qualité supérieure servi lors d'une excursion de luxe dans le désert d'Agafay",
    title: "Savourez des mezze méditerranéens lors de votre excursion à Agafay",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-agafay-poolside-lunch.webp",
    alt: "Déjeuner de luxe au bord de la piscine avec une ambiance d'Ibiza dans le paysage rocheux du désert d'Agafay",
    title: "Déjeuner de luxe au bord de la piscine dans le désert d'Agafay",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/private-events-restaurants-agafay-desert.webp",
    alt: "Décor marocain boho-chic sophistiqué à Casa Lalla, idéal pour des événements privés près de Marrakech",
    title: "Lieu d'événement privé boho-chic à Casa Lalla Agafay",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/casa-lalla-takerkoust-agafay-desert-view.webp",
    alt: "Vue panoramique sur le day club de luxe Casa Lalla Takerkoust situé près du désert d'Agafay",
    title: "Vues panoramiques époustouflantes sur Casa Lalla Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/authentic-moroccan-food-marrakech-restaurants.webp",
    alt: "Plateau de plats marocains authentiques et haut de gamme servi dans un restaurant branché près de Marrakech",
    title: "Dégustation de plats marocains authentiques et haut de gamme",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-pool-ibiza-vibe-marrakech.webp",
    alt: "Détente au bord de la piscine de luxe de Casa Lalla Takerkoust avec une ambiance exclusive de day club d'Ibiza",
    title: "Lounge exclusif au bord de la piscine façon Ibiza à Marrakech",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/luxury-dining-takerkoust-mykonos-style.webp",
    alt: "Expérience de repas de luxe en plein air à Casa Lalla avec une esthétique chic de Mykonos",
    title: "Dîner de luxe en plein air de style Mykonos chic",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/best-moroccan-food-lunch-lake-takerkoust.webp",
    alt: "Invités VIP profitant d'un déjeuner marocain haut de gamme avec vue sur le lac Takerkoust",
    title: "Déjeuner marocain haut de gamme avec vue sur le lac Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/sunset-party-agafay-ibiza-atmosphere.webp",
    alt: "Atmosphère vibrante de fête au coucher du soleil à Casa Lalla à Agafay, avec une énergie digne des meilleures soirées d'Ibiza",
    title: "Fête vibrante au coucher du soleil de style Ibiza à Casa Lalla",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/chic-desert-oasis-design-mykonos-inspiration.webp",
    alt: "Design d'oasis chic dans le désert de Casa Lalla, inspiré de l'architecture de luxe de Mykonos",
    title: "Découvrez notre oasis dans le désert inspirée de Mykonos",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/casa-lalla-agafay-menu-moroccan-cuisine.webp",
    alt: "Assortiment gourmand de cuisine marocaine traditionnelle issu du menu exclusif de Casa Lalla Agafay",
    title: "Cuisine marocaine gastronomique du menu de Casa Lalla",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/lalla-takerkoust-lake-weather-marrakech.webp",
    alt: "Coucher de soleil magique sur le lac Takerkoust avec une ambiance bohème chic haut de gamme du désert d'Agafay",
    title:
      "Vues magiques au coucher du soleil et ambiance bohème chic dans le désert",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-buggy-tour-marrakech.webp",
    alt: "Vue en hauteur depuis la terrasse sur le toit sur les eaux paisibles du lac Takerkoust après une excursion en buggy",
    title: "Vues depuis la terrasse sur le toit sur le paisible lac Takerkoust",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/quad-biking-agafay-desert-marrakech.webp",
    alt: "Mixologie haut de gamme et cocktails créatifs dans le meilleur day club festif de Marrakech",
    title: "Mixologie et cocktails créatifs dans notre Day Club festif",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/agafay-desert-day-trip-shuttle-service.webp",
    alt: "Service VIP attentionné dans un camp de luxe du désert d'Agafay offrant une expérience client 5 étoiles",
    title: "Service VIP 5 étoiles dans le désert d'Agafay",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/mechoui-roasted-lamb-desert-dinner.webp",
    alt: "Vues panoramiques sur le barrage du lac Takerkoust et les sommets enneigés du Haut Atlas",
    title:
      "Vues époustouflantes sur le lac Takerkoust et les montagnes de l'Atlas",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/spanish-paella-lakeside-marrakech-restaurant.webp",
    alt: "Jardins méditerranéens luxuriants pour une évasion paisible combinant la détente d'Ibiza et le charme de Marrakech",
    title: "Paisibles jardins méditerranéens avec une ambiance chill d'Ibiza",
    class: "object-center",
  },
  {
    image:
      "/agafay-gallery/lobster-pastilla-mediterranean-cuisine-marrakech.webp",
    alt: "Assortiment vibrant de salades marocaines de première qualité dans un des meilleurs restaurants de luxe de Marrakech",
    title: "Assortiment premium de salades marocaines authentiques",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/yoga-lalla-takerkoust-lake-meditation.webp",
    alt: "Dîner sophistiqué en plein air avec une ambiance authentique d'Agafay dans notre camp de luxe de style Mykonos",
    title: "Dîner sophistiqué en plein air avec l'ambiance du désert d'Agafay",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/lakeside-picnic-atlas-mountains-view.webp",
    alt: "Séances nocturnes d'observation des étoiles depuis notre terrasse sur le toit sous le ciel dégagé du désert d'Agafay",
    title:
      "Séances d'observation des étoiles sur le toit dans le désert d'Agafay",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/mastiha-signature-cocktail-marrakech-lounge.webp",
    alt: "Poulpe grillé et fruits de mer frais de la Méditerranée, un incontournable de notre restaurant inspiré de Mykonos",
    title: "Fruits de mer méditerranéens et poulpe grillé",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/restaurants-marocain-marrakech-chef.webp",
    alt: "Le parfait apéritif au coucher du soleil dans notre bar lounge de luxe surplombant le lac Lalla Takerkoust",
    title:
      "Savourez le parfait apéritif au coucher du soleil avec vue sur le lac",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/mediterranean-mezze-platter-boho-chic.webp",
    alt: "Élégant service de thé de l'après-midi boho-chic offrant une expérience de luxe près de Marrakech",
    title: "Élégante expérience de thé de l'après-midi boho-chic",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/floating-breakfast-heart-tray-private-pool.webp",
    alt: "Excursion pleine d'action en quad et buggy à travers le paysage rocheux du désert d'Agafay",
    title: "Excursion trépidante en quad dans le désert d'Agafay",
    class: "object-center",
  },
  {
    image: "/agafay-gallery/organic-herb-garden-sustainable-culinary.webp",
    alt: "Lounge chic sur le toit avec une ambiance premium d'Ibiza et des vues panoramiques sur le coucher de soleil dans le désert d'Agafay",
    title: "Lounge chic sur le toit avec ambiance coucher de soleil d'Ibiza",
    class: "object-center",
  },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="px-0 md:px-14 py-12 space-y-8 pt-[1.5px] lg:pt-14"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-[1.5px]">
        {GalleryImage.map((category, index) => (
          <figure key={index} className="flex flex-col">
            {/* Image */}
            <div className="relative w-full h-[65vh] ">
              <Image
                src={category.image}
                alt={category.alt}
                title={category.title}
                priority={index < 4}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={`object-cover h-full lg:rounded-md ${category.class}`}
              />
            </div>
            {/* Optional: If you ever want to display the image title cleanly */}
            <figcaption className="sr-only">{category.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
