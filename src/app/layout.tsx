import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NocodeHackers | Cursos No-code GRATIS en Español",
  description:
    "Te formamos para que aprendas cómo la Inteligencia Artificial y el NoCode te ayudarán a construir productos digitales sin necesidad de saber programar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
