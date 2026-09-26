// app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import "./globals.css";
export const metadata: Metadata = {
  title: "Meu Blog",
  description: "Blog feito com Next.js e TypeScript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        {children}
        <footer style={{ padding: "16px", textAlign: "center", color: "#666" }}>
          Turma de Programação e Design para Web II - 2026.2 - FAETERJ Barra Mansa
        </footer>
      </body>
    </html>
  );
}