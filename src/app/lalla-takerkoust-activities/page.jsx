import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: {
    default: "Casa Lalla Takerkoust",
    template: "%s | Activities & Experiences",
  },
  description:
    "Discover unique activities and experiences at Casa Lalla Takerkoust near Marrakech. Enjoy lake-side dining, sunset views, live entertainment, and unforgettable moments by Lalla Takerkoust Lake with the Atlas Mountains as your backdrop.",
  keywords: [
    "activities near marrakech",
    "things to do lalla takerkoust",
    "lake activities marrakech",
    "restaurant experiences marrakech",
    "casa lalla takerkoust activities",
    "sunset lake marrakech",
  ],
  openGraph: {
    title: "Activities & Experiences | Casa Lalla Takerkoust",
    description:
      "Explore activities and experiences at Casa Lalla Takerkoust, from lake views and sunset moments to live entertainment and unique dining experiences near Marrakech.",
    url: "https://casalallatakerkoust.com/lalla-takerkoust-activities",
    siteName: "Casa Lalla Takerkoust",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Activities and experiences at Casa Lalla Takerkoust",
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
