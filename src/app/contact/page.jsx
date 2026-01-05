import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: {
    default: "Casa Lalla Takerkoust",
    template: "%s | Contact Us",
  },
  description:
    "Contact Casa Lalla Takerkoust for reservations, private events, or general inquiries. Located near Marrakech by Lalla Takerkoust Lake, we are happy to assist you and make your experience unforgettable.",
  keywords: [
    "contact restaurant marrakech",
    "casa lalla takerkoust contact",
    "restaurant near lalla takerkoust",
    "private events marrakech restaurant",
    "lake view restaurant marrakech",
  ],
  openGraph: {
    title: "Contact Us | Casa Lalla Takerkoust",
    description:
      "Get in touch with Casa Lalla Takerkoust for table reservations, private events, or any questions. Enjoy an exceptional dining experience near Marrakech.",
    url: "https://casalallatakerkoust.com/contact",
    siteName: "Casa Lalla Takerkoust",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Casa Lalla Takerkoust",
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
