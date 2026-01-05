import "./globals.css";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: {
    default: "Casa Lalla Takerkoust",
    template: "%s | Casa Lalla Takerkoust",
  },
  description:
    "Casalalla Restaurant is a must-visit dining destination near Marrakech, located by the stunning barrage Lalla Takerkoust. This culinary gem offers an exceptional experience with a delightful blend of Moroccan cuisine and international dishes, all prepared with fresh, local ingredients. Enjoy breathtaking views of Lalla Takerkoust Lake and the Atlas Mountains, making it the perfect backdrop for a memorable meal.",
  keywords: [
    "luxury restaurant in marrakech",
    "alchool medina marrakech",
    "best moroccan restaurant marrakech",
    "top restaurant marocain marrakech",
  ],
  openGraph: {
    title: "Casa Lalla Takerkoust",
    description:
      "Casalalla Restaurant is a must-visit dining destination near Marrakech, located by the stunning barrage Lalla Takerkoust. This culinary gem offers an exceptional experience with a delightful blend of Moroccan cuisine and international dishes, all prepared with fresh, local ingredients. Enjoy breathtaking views of Lalla Takerkoust Lake and the Atlas Mountains, making it the perfect backdrop for a memorable meal.",
    url: "https://casalallatakerkoust.com/",
    siteName: "Casa Lalla Takerkoust",
    images: [
      {
        url: "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
        width: 1200,
        height: 630,
        alt: "Casa Lalla Takerkoust",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://casalallatakerkoust.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Casa Lalla Takerkoust",
              image:
                "https://casalallatakerkoust.com/casalalla-takerkoust-agafay-vibes.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Lalla Takerkoust",
                addressLocality: "Marrakech",
                postalCode: "40000",
                addressCountry: "MA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 31.352234464303265,
                longitude: -8.131036157671632,
              },
              url: "https://casalallatakerkoust.com",
              telephone: "+212675480103",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Marrakech",
                addressCountry: "MA",
              },
              servesCuisine: ["Marocaine", "Internationale"],
              sameAs: ["https://www.instagram.com/casa.lalla.takerkoust/"],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "13:00",
                  closes: "17:00",
                },
              ],
              menu: "https://casalallatakerkoust.com",
              acceptsReservations: "True",
            }),
          }}
        />
      </Head>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-1GSVC5EJ1N" />
    </html>
  );
}
