import { useState } from "react";

export default function Contador() {
  const [contagem, setContagem] = useState(0);

  function incrementar() {
    if (contagem < 10) setContagem(contagem + 1);
  }

  function decrementar() {
    if (contagem > 0) setContagem(contagem - 1);
  }

  return (
    <div style={{ margin: "20px 0", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>1. Contador com Limites</h2>
      <div style={{ display: "flex", alignItems: "center", gap: "15px", marginTop: "10px" }}>
        <button onClick={decrementar} style={{ padding: "5px 15px", fontSize: "1.2rem" }}>-</button>
        <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{contagem}</span>
        <button onClick={incrementar} style={{ padding: "5px 15px", fontSize: "1.2rem" }}>+</button>
      </div>
    </div>
  );
}