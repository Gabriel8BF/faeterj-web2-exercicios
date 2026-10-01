import Contador from "./components/Contador";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Exercícios - Módulo 3 (React Hooks)</h1>
      <p>Projetos desenvolvidos para a disciplina de Programação e Design para Web II.</p>
      
      <Contador />
      <Formulario />
    </div>
  );
}

export default App;