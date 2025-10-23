import "./globals.css";

export const metadata = {
  title: "Casa Lalla Takerkoust",
  description: "Casa Lalla Takerkoust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
