import { useUserStore } from "../store/useUserStore.js";

export function ModuloGlobal() {
  const { usuario, login, logout } = useUserStore();

  return (
    <div>
      <p>Usuario Atual: {usuario}</p>
      <button onClick={() => login("Ana")}>Entrar</button>
      <button onClick={logout}>Sair</button>
    </div>
  );
}