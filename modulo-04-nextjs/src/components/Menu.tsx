import Link from "next/link";

export default function Menu() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#333", color: "#fff", display: "flex", gap: "15px" }}>
      <Link href="/" style={{ color: "#fff", textDecoration: "none" }}>Início</Link>
      <Link href="/sobre" style={{ color: "#fff", textDecoration: "none" }}>Sobre</Link>
      <Link href="/contato" style={{ color: "#fff", textDecoration: "none" }}>Contato</Link>
      <Link href="/projetos" style={{ color: "#fff", textDecoration: "none" }}>Projetos</Link>
    </nav>
  );
}