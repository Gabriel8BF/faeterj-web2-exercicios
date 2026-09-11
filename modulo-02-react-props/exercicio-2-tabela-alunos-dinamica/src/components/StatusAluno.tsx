interface StatusAlunoProps {
  media: number;
}

export function StatusAluno({ media }: StatusAlunoProps) {
  let texto = "Reprovado";
  let cor = "vermelho";

  if (media >= 7) {
    texto = "Aprovado";
    cor = "verde";
  } else if (media >= 5) {
    texto = "Recuperação";
    cor = "amarelo";
  }

  const estiloBadge: React.CSSProperties = {
    padding: "4px 8px",
    borderRadius: "4px",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: cor === "verde" ? "#2e7d32" : cor === "amarelo" ? "#f57c00" : "#c62828",
  };

  return <span style={estiloBadge}>{texto}</span>;
}