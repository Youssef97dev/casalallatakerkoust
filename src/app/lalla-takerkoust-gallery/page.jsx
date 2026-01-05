import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: {
    default: "Casa Lalla Takerkoust",
    template: "%s | Gallery",
  },
  description:
    "Explore the photo gallery of Casa Lalla Takerkoust and discover the beauty of our restaurant, breathtaking lake views, Moroccan cuisine, and unforgettable moments near Marrakech at Lalla Takerkoust.",
  keywords: [
    "casa lalla takerkoust gallery",
    "restaurant gallery marrakech",
    "lalla takerkoust lake restaurant photos",
    "moroccan restaurant photos marrakech",
    "luxury restaurant marrakech gallery",
  ],
  openGraph: {
    title: "Gallery | Casa Lalla Takerkoust",
    description:
      "Discover Casa Lalla Takerkoust through our gallery. Enjoy stunning photos of the restaurant, lake views, cuisine, and atmosphere near Marrakech.",
    url: "https://casalallatakerkoust.com/lalla-takerkoust-gallery",
    siteName: "Casa Lalla Takerkoust",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust gallery",
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
