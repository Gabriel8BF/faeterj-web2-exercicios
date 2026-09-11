import { TabelaAlunos, type Aluno } from "./components/TabelaAlunos";

const listaDeAlunos: Aluno[] = [
  { id: 1, nome: "Ana Silva", media: 8.5 },
  { id: 2, nome: "Carlos Souza", media: 6.0 },
  { id: 3, nome: "Beatriz Lima", media: 3.5 },
  { id: 4, nome: "Daniel Oliveira", media: 7.0 },
];

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Exercício 2: Tabela Dinâmica de Alunos</h1>
      <TabelaAlunos alunos={listaDeAlunos} />
    </div>
  );
}

export default App;