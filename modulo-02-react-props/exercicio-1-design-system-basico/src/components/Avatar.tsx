interface AvatarProps {
  nome: string;
  urlImagem: string;
}

export function Avatar({ nome, urlImagem }: AvatarProps) {
  return <img className="avatar" src={urlImagem} alt={`Avatar de ${nome}`} />;
}