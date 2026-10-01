interface ProjetoCardProps {
  titulo: string;
  descricao: string;
  tecnologias: string[];
}

function ProjetoCard({ titulo, descricao, tecnologias }: ProjetoCardProps) {
  return (
    <div className="projeto-card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className="projeto-card_tags">
        {tecnologias.map((tech) => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjetoCard;