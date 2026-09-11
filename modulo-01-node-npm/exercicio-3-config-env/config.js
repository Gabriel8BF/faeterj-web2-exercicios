import "dotenv/config";

// Função que mascara o dado mantendo visíveis apenas os últimos 4 caracteres
function mascarar(valor) {
  if (!valor || valor.length <= 4) return "****";
  const ultimosQuatro = valor.slice(-4);
  const asteriscos = "*".repeat(valor.length - 4);
  return asteriscos + ultimosQuatro;
}

console.log("--- CONFIGURAÇÕES DO SISTEMA ---");
console.log("API_TOKEN:", mascarar(process.env.API_TOKEN));
console.log("DB_PASSWORD:", mascarar(process.env.DB_PASSWORD));
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL); // E-mail não precisa de máscara