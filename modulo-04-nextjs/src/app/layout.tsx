import type { Metadata } from "next";
import "./globals.css";
import Menu from "../components/Menu";

export const metadata: Metadata = {
  title: "Exercícios Next.js",
  description: "Módulo 04 de Web II",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}