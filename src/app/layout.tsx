import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audio Music Store",
  description: "A store for audio equipment and music instruments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
