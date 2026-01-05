import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: {
    default: "Casa Lalla Takerkoust",
    template: "%s | The Restaurant",
  },
  description:
    "Learn more about Casa Lalla Takerkoust, a unique lake-side restaurant near Marrakech offering authentic Moroccan and international cuisine with breathtaking views of Lalla Takerkoust Lake and the Atlas Mountains.",
  keywords: [
    "about casa lalla takerkoust",
    "restaurant near marrakech lake",
    "lalla takerkoust restaurant",
    "moroccan restaurant marrakech",
    "lake view restaurant marrakech",
  ],
  openGraph: {
    title: "The Restaurant | Casa Lalla Takerkoust",
    description:
      "Discover the story of Casa Lalla Takerkoust, a lake-side restaurant near Marrakech blending Moroccan and international cuisine with stunning views and a warm atmosphere.",
    url: "https://casalallatakerkoust.com/restaurant-casa-lalla",
    siteName: "Casa Lalla Takerkoust",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Restaurant Casa Lalla Takerkoust",
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
