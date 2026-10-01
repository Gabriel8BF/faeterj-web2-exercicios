export default function ProjetosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "20px", border: "2px dashed #ccc" }}>
      <p style={{ color: "gray", fontSize: "0.8rem" }}>[Layout específico da seção Projetos]</p>
      {children}
    </div>
  );
}