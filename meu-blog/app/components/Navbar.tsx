// app/components/Navbar.tsx
import Link from "next/link";
 export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "16px", padding: "16px", background: "#aedfff" }}>
      <Link href="/">Início</Link>
      <Link href="/sobre">Sobre</Link>
      <Link href="/posts">Posts</Link>
      <Link href="/contato-rapido">Contato Rápido</Link>
    </nav>
  );
}