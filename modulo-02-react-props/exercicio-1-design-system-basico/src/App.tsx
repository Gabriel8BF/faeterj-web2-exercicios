import { Button } from "./components/Button";
import { Badge } from "./components/Badge";
import { Card } from "./components/Card";
import { Avatar } from "./components/Avatar";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "15px" }}>
      <h1>Exercício 1: Design System Básico</h1>

      <section>
        <h2>Buttons</h2>
        <Button texto="Salvar" variante="primary" />
        <Button texto="Cancelar" variante="secondary" />
        <Button texto="Excluir" variante="danger" />
      </section>

      <section>
        <h2>Badges</h2>
        <Badge texto="Aprovado" cor="verde" />
        <Badge texto="Pendente" cor="amarelo" />
        <Badge texto="Reprovado" cor="vermelho" />
      </section>

      <section>
        <h2>Avatar</h2>
        <Avatar nome="Usuário" urlImagem="https://via.placeholder.com/50" />
      </section>

      <section>
        <h2>Alert</h2>
        <Alert tipo="sucesso">Operação realizada com sucesso!</Alert>
      </section>

      <section>
        <h2>Card com Children</h2>
        <Card titulo="Card de Teste" footer={<Button texto="Ação" variante="primary" />}>
          <p>Este é o conteúdo passado como children para o componente Card.</p>
        </Card>
      </section>
    </div>
  );
}

export default App;