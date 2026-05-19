import { PdfViewer } from "./components/Menu";

export const metadata = {
  title: "Menu | Casa Lalla Takerkoust | Ibiza Style",
  description:
    "Discover the menu of Casa Lalla Takerkoust, a premium Moroccan restaurant near Marrakech. Enjoy traditional dishes, fresh local ingredients, and breathtaking views of Lake Takerkoust and the Atlas Mountains",
};

const page = () => {
  return <PdfViewer file="/menu/menu-casalalla-anglais.pdf" />;
};

export default page;
