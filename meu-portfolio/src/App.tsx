import "./App.css";
import Botao from "./components/Button";
import ProjetoCard from "./components/ProjetoCard";

const meusProjetos = [
  { titulo: "Portfólio Pessoal", descricao: "Este site!", tecnologias: ["React", "Node.js"] },
  { titulo: "CLI de Tarefas", descricao: "Gerenciador via terminal", tecnologias: ["Node.js", "FS"] },
];

function App() {
  return (
    <div>
      <h1>Meu Portfólio</h1>
      <Botao texto="Entrar em Contato" variante="primary" />
      
      <h2 style={{ marginTop: '2rem' }}>Meus Projetos</h2>
      <div className="grid">
        {meusProjetos.map((p) => (
          <ProjetoCard key={p.titulo} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;