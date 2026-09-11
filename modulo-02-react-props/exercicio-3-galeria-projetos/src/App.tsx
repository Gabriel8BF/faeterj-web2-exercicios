import { GaleriaProjetos, type Projeto } from "./components/GaleriaProjetos";

const meusProjetos: Projeto[] = [
  {
    id: 1,
    titulo: "Portfólio Pessoal",
    descricao: "Meu site de apresentação com CMS.",
    imagem: "https://via.placeholder.com/300x140?text=Portfolio",
    tecnologias: ["React", "TypeScript", "Node.js"],
    link: "https://github.com",
  },
  {
    id: 2,
    titulo: "API de Tarefas",
    descricao: "CLI para gerenciamento de tarefas usando Node.js.",
    imagem: "https://via.placeholder.com/300x140?text=API+Tarefas",
    tecnologias: ["Node.js", "JSON"],
    link: "https://github.com",
  },
  {
    id: 3,
    titulo: "Dashboard Financeiro",
    descricao: "Painel interativo para métricas de vendas.",
    imagem: "https://via.placeholder.com/300x140?text=Dashboard",
    tecnologias: ["React", "TypeScript"],
    link: "https://github.com",
  },
];

// Tecnologia de teste para o filtro estático do Módulo 2
const filtroAtual = "React";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Exercício 3: Galeria de Projetos</h1>
      <GaleriaProjetos projetos={meusProjetos} filtroAtual={filtroAtual} />
    </div>
  );
}

export default App;