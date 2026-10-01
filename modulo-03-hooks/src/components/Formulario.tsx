import { useState, useEffect } from "react";

export default function Formulario() {
  // Exercício 2: Objeto único de estado
  const [dados, setDados] = useState({ nome: "", email: "", mensagem: "" });

  function atualizarCampo(campo: string, valor: string) {
    setDados({ ...dados, [campo]: valor });
  }

  // Exercício 3: Efeito colateral (mudar o título da aba)
  useEffect(() => {
    document.title = dados.nome ? `Digitando: ${dados.nome}` : "Formulário de Contato";
  }, [dados.nome]);

  return (
    <div style={{ margin: "20px 0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>2 e 3. Formulário e Título Dinâmico</h2>
      
      <form style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input
          type="text"
          placeholder="Seu Nome"
          value={dados.nome}
          onChange={(e) => atualizarCampo("nome", e.target.value)}
          style={{ padding: "8px" }}
        />
        <input
          type="email"
          placeholder="Seu E-mail"
          value={dados.email}
          onChange={(e) => atualizarCampo("email", e.target.value)}
          style={{ padding: "8px" }}
        />
        <textarea
          placeholder="Sua Mensagem"
          value={dados.mensagem}
          onChange={(e) => atualizarCampo("mensagem", e.target.value)}
          style={{ padding: "8px", minHeight: "80px" }}
        />
      </form>

      <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
        <h3>Valores em tempo real:</h3>
        <p><strong>Nome:</strong> {dados.nome}</p>
        <p><strong>E-mail:</strong> {dados.email}</p>
        <p><strong>Mensagem:</strong> {dados.mensagem}</p>
      </div>
    </div>
  );
}