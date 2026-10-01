import { useUserStore } from "../store/useUserStore.js";

export function ModuloTema() {
  const { tema, alternarTema } = useUserStore();

  return (
    <div>
      <p>Tema atual: {tema.toUpperCase()}</p>
      <button onClick={alternarTema}>Alternar Tema</button>
    </div>
  );
}