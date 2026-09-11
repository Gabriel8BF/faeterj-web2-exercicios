interface ButtonProps {
  texto: string;
  variante: "primary" | "secondary" | "danger";
  onClick?: () => void;
}

export function Button({ texto, variante, onClick }: ButtonProps) {
  return (
    <button className={`btn btn--${variante}`} onClick={onClick}>
      {texto}
    </button>
  );
}