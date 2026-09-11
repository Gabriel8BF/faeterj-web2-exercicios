import React from "react";

interface AlertProps {
  tipo: "sucesso" | "erro" | "aviso";
  children: React.ReactNode;
}

export function Alert({ tipo, children }: AlertProps) {
  return <div className={`alert alert--${tipo}`}>{children}</div>;
}