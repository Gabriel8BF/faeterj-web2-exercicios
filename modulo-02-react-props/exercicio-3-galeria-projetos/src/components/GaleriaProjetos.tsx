import { Card } from "./Card";

export interface Projeto {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  tecnologias: string[];
  link: string;
}

interface GaleriaProjetosProps {
  projetos: Projeto[];
  filtroAtual: string;
}

export function GaleriaProjetos({ projetos, filtroAtual }: GaleriaProjetosProps) {
  // Filtra os projetos pela tecnologia selecionada ou exibe todos
  const projetosFiltrados = projetos.filter(
    (p) => filtroAtual === "Todos" || p.tecnologias.includes(filtroAtual)
  );

  const estiloGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "16px",
    marginTop: "20px",
  };

  return (
    <div>
      <p>Exibindo projetos para a tecnologia: <strong>{filtroAtual}</strong></p>
      
      {projetosFiltrados.length === 0 ? (
        <p>Nenhum projeto encontrado para esta tecnologia.</p>
      ) : (
        <div style={estiloGrid}>
          {projetosFiltrados.map((projeto) => (
            <Card key={projeto.id} titulo={projeto.titulo}>
              <img
                src={projeto.imagem}
                alt={projeto.titulo}
                style={{ width: "100%", height: "140px", objectFit: "cover", borderRadius: "4px" }}
              />
              <p>{projeto.descricao}</p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "12px" }}>
                {projeto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      backgroundColor: "#e0e0e0",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      fontSize: "12px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a href={projeto.link} target="_blank" rel="noreferrer">
                Ver Projeto
              </a>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}