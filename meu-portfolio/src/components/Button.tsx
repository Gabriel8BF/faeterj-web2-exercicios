interface BotaoProps {
  texto: string;
  variante: "primary" | "secondary" | "danger";
}

function Botao({ texto, variante }: BotaoProps) {
  return (
    <button className={`botao botao--${variante}`}>
      {texto}
    </button>
  );
}

export default Botao;