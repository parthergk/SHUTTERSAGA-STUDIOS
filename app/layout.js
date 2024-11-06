"use client"
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/preloader/preloader";
import { useState } from "react";

// Importing the fonts
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Use 'swap' to prevent FOIT (Flash of Invisible Text)
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <html lang="en">
      <head>
        {/* Add a noscript fallback for users with JavaScript disabled */}
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
      </head>
      <body
        className={cormorantGaramond.className}
        >
        {isLoading && (
          <Preloader 
            onLoadingComplete={() => setIsLoading(false)} 
          />
        )}
        <div style={{ display: isLoading ? "none" : "block" }}>
        {(children)}
        </div>
      </body>
    </html>
  );
}