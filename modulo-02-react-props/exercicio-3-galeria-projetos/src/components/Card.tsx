import React from "react";

interface CardProps {
  titulo: string;
  children: React.ReactNode;
}

export function Card({ titulo, children }: CardProps) {
  const estiloCard: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  return (
    <div style={estiloCard}>
      <h3 style={{ marginTop: 0 }}>{titulo}</h3>
      <div>{children}</div>
    </div>
  );
}