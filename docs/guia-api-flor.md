# Guia rápido da API Flor 🌸

---

## 1. Comandos principais que usamos nesse projeto

### 1.1 Criar a pasta do projeto

```bash
mkdir flor-api
cd flor-api
```

- `mkdir flor-api` → cria uma pasta chamada `flor-api`.
- `cd flor-api` → entra na pasta.  
  Sempre que for rodar comandos do projeto, você precisa estar **dentro dessa pasta**.

---

### 1.2 Iniciar o projeto Node

```bash
npm init -y
```

- Cria o arquivo `package.json`, que guarda:
  - nome do projeto
  - versão
  - dependências (bibliotecas que você instala)
  - scripts (atalhos de comando, como `npm run dev`)

---

### 1.3 Instalar bibliotecas

```bash
npm install express cors
npm install --save-dev nodemon
```

- `express` → ajuda a criar a API (rotas, respostas, etc.).
- `cors` → libera acesso da API para outros sistemas (como um front-end).
- `nodemon` → usado só em desenvolvimento; ele reinicia o servidor sempre que você salva um arquivo.

---

### 1.4 Scripts no package.json

No `package.json`, você colocou:

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

Isso significa:

- `npm start` → roda `node src/server.js` (modo simples).
- `npm run dev` → roda `nodemon src/server.js` (modo desenvolvimento, com auto-reload).

Normalmente, você usa:

```bash
npm run dev
```

para trabalhar na API.

---

## 2. Arquivo `src/server.js`

```js
const app = require("./app");
pw
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`API Flor rodando em http://localhost:${PORT}`);
});
```

Explicando:

- `require("./app")` → importa a aplicação que você criou no `app.js`.
- `PORT` → porta onde a API vai rodar (3000 se não tiver nada definido).
- `app.listen(PORT, ...)` → liga o servidor.  
  Quando isso funciona, você vê a mensagem no terminal e consegue acessar `http://localhost:3000`.

---

## 3. Arquivo `src/app.js` (versão simplificada com tudo junto)

```js
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Rota básica
app.get("/", (req, res) => {
  res.json({ message: "API Flor está no ar 🌸" });
});

// "Banco de dados" em memória
let pieces = [
  {
    id: 1,
    name: "Mandala Flor de Novembro",
    type: "mandala",
    colors: ["roxo", "verde"],
    style: "bruxinha",
    materials: ["linha de algodão", "aro de metal"],
    price: 150
  },
  {
    id: 2,
    name: "Filtro dos Sonhos Floresta Encantada",
    type: "filtro dos sonhos",
    colors: ["verde", "marrom"],
    style: "floresta",
    materials: ["linha de algodão", "penas sintéticas"],
    price: 180
  }
];

// GET /pieces → lista todas as peças
app.get("/pieces", (req, res) => {
  res.json(pieces);
});

// POST /pieces → cria nova peça
app.post("/pieces", (req, res) => {
  const { name, type, colors, style, materials, price } = req.body;

  if (!name || !type) {
    return res
      .status(400)
      .json({ error: "Os campos 'name' e 'type' são obrigatórios." });
  }

  const newPiece = {
    id: pieces.length + 1,
    name,
    type,
    colors: colors || [],
    style: style || "autorais",
    materials: materials || [],
    price: price || 0
  };

  pieces.push(newPiece);

  return res.status(201).json(newPiece);
});

// DELETE /pieces/:id → remove peça
app.delete("/pieces/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "ID inválido." });
  }

  const before = pieces.length;
  pieces = pieces.filter(p => p.id !== id);

  if (pieces.length === before) {
    return res.status(404).json({ error: "Peça não encontrada." });
  }

  return res.status(204).send();
});

// Função "IA" que gera uma ideia de peça
function generateIdea({ mood, colors = [], productType }) {
  const finalMood = mood || "boho";
  const finalType = productType || "mandala";
  const finalColors =
    colors.length > 0 ? colors.join(", ") : "tons terrosos e off-white";

  let baseText = "";

  if (finalMood === "boho") {
    baseText =
      "com estilo boho, misturando texturas, franjas e elementos orgânicos";
  } else if (finalMood === "floresta") {
    baseText =
      "inspirada em floresta encantada, com folhas, flores e um toque místico";
  } else if (finalMood === "bruxinha") {
    baseText =
      "com estética bruxinha da floresta, símbolos místicos e detalhes delicados";
  } else {
    baseText =
      "com o estilo autoral da Flor, trazendo crochê, cores e flores";
  }

  return `Crie uma peça do tipo ${finalType} em crochê, usando ${finalColors}, ${baseText}. Pense em algo que funcione bem como decoração e também como peça especial para cantinhos afetivos.`;
}

// POST /ai/suggestions → usa a função de "IA"
app.post("/ai/suggestions", (req, res) => {
  const { mood, colors, productType } = req.body;

  const idea = generateIdea({ mood, colors, productType });

  return res.json({
    mood: mood || null,
    colors: colors || [],
    productType: productType || null,
    idea
  });
});

module.exports = app;
```

### O que você precisa lembrar aqui

- `const app = express();` → cria a aplicação.
- `app.use(cors());` → libera o acesso da API.
- `app.use(express.json());` → permite receber JSON no corpo da requisição.
- `app.get("/alguma-coisa", ...)` → rota para buscar dados (GET).
- `app.post("/alguma-coisa", ...)` → rota para criar dados (POST).
- `app.delete("/alguma-coisa/:id", ...)` → rota para deletar (DELETE).
- `req.body` → dados que vêm no JSON enviado pelo cliente.
- `req.params.id` → pega o `:id` da URL.
- `res.json(...)` → devolve resposta em JSON.
- `res.status(201).json(...)` → define o código HTTP (ex.: 201, 400, 404, 204).
- `module.exports = app;` → exporta a aplicação para o `server.js` usar.

---

## 4. Como rodar e testar

1. No terminal, dentro da pasta do projeto:

```bash
npm run dev
```

2. No navegador:
   - `http://localhost:3000/` → vê a mensagem da API Flor.
   - `http://localhost:3000/pieces` → lista as peças.

3. No Postman ou Thunder Client:
   - `POST {{baseUrl}}/pieces` com JSON no body para criar uma nova peça.
   - `DELETE {{baseUrl}}/pieces/1` para remover a peça com id 1.
   - `POST {{baseUrl}}/ai/suggestions` com um JSON como:

```json
{
  "mood": "bruxinha",
  "colors": ["roxo", "preto"],
  "productType": "filtro dos sonhos"
}
```

Assim você já tem uma API completa para treinar testes de API, automação e entender cada parte do fluxo.
