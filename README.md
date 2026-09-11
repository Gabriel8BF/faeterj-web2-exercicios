# 🎓 Exercícios de Programação e Design para Web II — FAETERJ

Este repositório contém as atividades práticas, desafios e exercícios desenvolvidos durante a disciplina de **Programação e Design para Web II** da **FAETERJ**.

O objetivo deste espaço é centralizar os estudos das apostilas e conceitos fundamentais do ecossistema web moderno, cobrindo desde fundamentos de Node.js até bibliotecas e frameworks avançados (React, Next.js, Prisma, etc.).

---

## 🛠️ Tecnologias e Ferramentas

* **Linguagens:** JavaScript (ES6+), TypeScript
* **Runtime / Bundler:** Node.js, Vite
* **Bibliotecas & Frontend:** React, HTML5, CSS3 / Tailwind CSS
* **Gerenciador de Pacotes:** NPM

---

## 📂 Estrutura de Conteúdos

A pasta está organizada por módulos, acompanhando a evolução didática das apostilas da disciplina:

```text
faeterj-web2-exercicios/
├── modulo-01-node-npm/           # Node.js nativo, NPM, scripts, dotenv e manipulação de arquivos
│   ├── exercicio-1-cli-tarefas/  # CLI de tarefas com leitura/escrita JSON (fs/promises)
│   ├── exercicio-2-servidor-http/# Servidor HTTP nativo com leitura de arquivos estáticos
│   └── exercicio-3-config-env/   # Configuração segura com dotenv e mascaramento de tokens
│
├── modulo-02-react-props/        # Fundamentos de React, Vite, TypeScript e Componentização
│   ├── design-system-basico/     # Componentes base: Button, Badge, Card, Avatar, Alert
│   ├── tabela-alunos-dinamica/   # Renderização de listas (.map), props e renderização condicional
│   └── galeria-projetos/         # Grid de projetos com filtros dinâmicos por tecnologia
│
├── modulo-03-react-hooks/        # (Próximos módulos) Gerenciamento de Estado e Formulários
├── modulo-04-nextjs-routes/      # (Próximos módulos) Roteamento e App Router
└── README.md


## 🚀 Como Executar os Exercícios

Como cada subpasta possui seu próprio ecossistema ou conjunto de dependências, siga os passos abaixo para testar localmente:

```text
Exercícios de Node.js (Módulo 1)
# Entrar na pasta do exercício
cd modulo-01-node-npm/exercicio-1-cli-tarefas

# Instalar dependências (caso existam)
npm install

# Executar o script
node tasks.js list

