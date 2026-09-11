import { readFile, writeFile } from "fs/promises";

const ARQUIVO = "tarefas.json";

// Função para ler as tarefas do arquivo JSON
async function carregarTarefas() {
  try {
    const conteudo = await readFile(ARQUIVO, "utf-8");
    return JSON.parse(conteudo);
  } catch {
    return []; // Se o arquivo ainda não existir, inicia com uma lista vazia
  }
}

// Função para salvar a lista atualizada no arquivo JSON
async function salvarTarefas(tarefas) {
  await writeFile(ARQUIVO, JSON.stringify(tarefas, null, 2));
}

async function main() {
  // Pega os argumentos passados no terminal depois de "node tasks.js"
  const [comando, valor] = process.argv.slice(2);
  const tarefas = await carregarTarefas();

  if (comando === "add") {
    // Adiciona uma nova tarefa
    tarefas.push({ id: tarefas.length + 1, texto: valor, feita: false });
    await salvarTarefas(tarefas);
    console.log(`Tarefa adicionada: "${valor}"`);

  } else if (comando === "list") {
    // Lista todas as tarefas
    tarefas.forEach((t) => {
      console.log(`${t.feita ? "[x]" : "[ ]"} ${t.id}. ${t.texto}`);
    });

  } else if (comando === "done") {
    // Marca uma tarefa como concluída pelo ID
    const id = Number(valor);
    const tarefa = tarefas.find((t) => t.id === id);
    
    if (tarefa) {
      tarefa.feita = true;
      await salvarTarefas(tarefas);
      console.log(`Tarefa ${id} marcada como feita.`);
    } else {
      console.log(`Tarefa ${id} não encontrada.`);
    }

  } else {
    console.log('Uso: node tasks.js [add "texto" | list | done <id>]');
  }
}

main();