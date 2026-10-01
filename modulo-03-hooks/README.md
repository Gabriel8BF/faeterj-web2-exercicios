# Exercícios - Módulo 03: React Hooks e Estado

Este diretório contém a resolução dos exercícios de fixação do Módulo 3 da disciplina de Programação e Design para Web II (FAETERJ). O foco destas atividades é a aplicação prática de interatividade no React através de **Hooks**.

## 🛠️ O que foi desenvolvido

### 1. Contador com Limites (`Contador.tsx`)
- **Conceito:** Utilização básica do `useState`.
- **Como funciona:** O componente mantém um estado numérico (`contagem`). As funções de incremento e decremento possuem validações condicionais (`if`) que bloqueiam a atualização do estado caso o valor tente ultrapassar o limite máximo de 10 ou o limite mínimo de 0.

### 2. Formulário Controlado (`Formulario.tsx`)
- **Conceito:** Gerenciamento de múltiplos inputs com um único objeto de estado.
- **Como funciona:** Em vez de usar três `useState` separados, os campos (nome, email e mensagem) compartilham o estado `{ nome: "", email: "", mensagem: "" }`. A função `atualizarCampo` utiliza o operador *Spread* (`...dados`) para copiar os valores antigos e sobrescrever apenas a chave do input que está sendo digitado. O resultado é renderizado em tempo real na parte inferior do componente.

### 3. Título Dinâmico (`Formulario.tsx`)
- **Conceito:** Efeitos colaterais com `useEffect`.
- **Como funciona:** Um hook `useEffect` foi implementado para observar exclusivamente a propriedade `dados.nome` (passada no array de dependências). Toda vez que essa string sofre alteração, o hook intercepta a mudança e injeta o texto digitado na API nativa do navegador (`document.title`), alterando o nome da aba ativamente.

## 🚀 Como executar o projeto
1. Acesse o diretório: `cd modulo-03-hooks`
2. Instale as dependências: `npm install`
3. Rode o servidor de desenvolvimento: `npm run dev`