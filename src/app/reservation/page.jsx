import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: {
    default: "Casa Lalla Takerkoust",
    template: "%s | Reserve a Table",
  },
  description:
    "Reserve your table at Casa Lalla Takerkoust, a unique dining destination near Marrakech overlooking Lalla Takerkoust Lake and the Atlas Mountains. Book online and enjoy an unforgettable culinary experience blending Moroccan and international cuisine.",
  keywords: [
    "book restaurant marrakech",
    "table reservation marrakech",
    "restaurant booking lalla takerkoust",
    "casa lalla takerkoust booking",
    "lake view restaurant reservation",
  ],
  openGraph: {
    title: "Reserve a Table | Casa Lalla Takerkoust",
    description:
      "Rserve your table at Casa Lalla Takerkoust and enjoy Moroccan and international cuisine with breathtaking views of Lalla Takerkoust Lake and the Atlas Mountains.",
    url: "https://casalallatakerkoust.com/reservation",
    siteName: "Casa Lalla Takerkoust",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Reserve a table at Casa Lalla Takerkoust",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://casalallatakerkoust.com"),
};

const page = () => {
  return <Loader />;
};

export default page;
