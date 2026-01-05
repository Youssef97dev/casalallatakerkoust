import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: {
    default: "Casa Lalla Takerkoust",
    template: "%s | Private Events",
  },
  description:
    "Host your private events at Casa Lalla Takerkoust near Marrakech. From weddings and birthdays to corporate dinners and special celebrations, enjoy a unique lake-side venue with panoramic views of Lalla Takerkoust and the Atlas Mountains.",
  keywords: [
    "private events marrakech",
    "wedding venue marrakech",
    "corporate events marrakech",
    "lake view event venue",
    "casa lalla takerkoust events",
    "birthday party restaurant marrakech",
  ],
  openGraph: {
    title: "Private Events | Casa Lalla Takerkoust",
    description:
      "Organize unforgettable private events at Casa Lalla Takerkoust. A unique venue near Marrakech with lake views, refined cuisine, and tailored experiences.",
    url: "https://casalallatakerkoust.com/private-events",
    siteName: "Casa Lalla Takerkoust",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Private events at Casa Lalla Takerkoust",
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
