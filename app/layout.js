import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Importing the fonts
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Use 'swap' to prevent FOIT (Flash of Invisible Text)
});


export const metadata = {
  title: "SHUTTERSAGA STUDIOS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload the fonts to improve performance */}
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" as="style" />
        {/* Add a noscript fallback for users with JavaScript disabled */}
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body
        className={`${cormorantGaramond.className}`}
      >
        {children}
      </body>
    </html>
  );
}
