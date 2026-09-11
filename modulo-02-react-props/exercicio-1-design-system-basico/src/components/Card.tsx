import React from "react";

interface CardProps {
  titulo: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export function Card({ titulo, children, footer }: CardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{titulo}</h2>
      </div>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}