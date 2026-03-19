import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Space_Mono, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-spacemono",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ThinkSphere — The Credential That Gets You Hired",
  description: "Tackling youth unemployment through tourism innovation in Kicukiro District, Rwanda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${montserrat.variable} ${spaceMono.variable} ${outfit.variable} antialiased selection:bg-[#2A7D6E]/20 selection:text-[#000]`}>
        {children}
      </body>
    </html>
  );
}
