import { PdfViewer } from "./components/Menu";

export const metadata = {
  title: "La Carte | Casa Lalla Takerkoust | Ibiza Style",
  description:
    "Découvrez le menu de Casa Lalla Takerkoust, un restaurant marocain d’exception près de Marrakech. Savourez des plats traditionnels préparés avec des produits frais locaux et profitez d’une vue spectaculaire sur le lac de Takerkoust et l’Atlas",
};

const page = () => {
  return <PdfViewer file="/menu/menu-casalalla-francais.pdf" />;
};

export default page;
