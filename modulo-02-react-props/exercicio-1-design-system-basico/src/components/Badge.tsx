interface BadgeProps {
  texto: string;
  cor: "verde" | "vermelho" | "amarelo";
}

export function Badge({ texto, cor }: BadgeProps) {
  return <span className={`badge badge--${cor}`}>{texto}</span>;
}