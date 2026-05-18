import React from "react";
import Loader from "./components/Loader";

export const metadata = {
  title: "Galerie Photos | Casa Lalla Takerkoust | Ambiance Mykonos",
  description:
    "Découvrez la galerie de Casa Lalla Takerkoust. Plongez dans l'ambiance Ibiza de notre restaurant près de Marrakech avec vue imprenable sur le lac.",
  openGraph: {
    title: "Galerie Photos | Casa Lalla Takerkoust | Ambiance Mykonos",
    description: "Découvrez la galerie de Casa Lalla Takerkoust.",
    images: [
      "/agafay-takerkoust/romantic-night-dining-ambiance-casa-lalla-takerkoust.webp",
    ], // Add a preview image path here
  },
};

const page = () => {
  return <Loader />;
};

export default page;
