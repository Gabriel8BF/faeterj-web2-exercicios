import { StatusAluno } from "./StatusAluno";

export interface Aluno {
  id: number;
  nome: string;
  media: number;
}

interface TabelaAlunosProps {
  alunos: Aluno[];
}

export function TabelaAlunos({ alunos }: TabelaAlunosProps) {
  return (
    <table border={1} cellPadding={10} style={{ borderCollapse: "collapse", width: "100%", maxWidth: "600px" }}>
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2" }}>
          <th>Nome</th>
          <th>Média</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {alunos.map((aluno) => (
          <tr key={aluno.id}>
            <td>{aluno.nome}</td>
            <td style={{ textAlign: "center" }}>{aluno.media}</td>
            <td style={{ textAlign: "center" }}>
              <StatusAluno media={aluno.media} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}