// -----------------------------------------------------------------------------
// APP.JS - APLICAÇÃO PRINCIPAL DA API FLOR
// Aqui vamos deixar tudo em um arquivo só para simplificar:
// - Configuração do Express
// - Rotas de peças (/pieces)
// - Rota de IA (/ai/suggestions)
// -----------------------------------------------------------------------------

const express = require("express");
const cors = require("cors");

// Cria a app Express
const app = express();

// Middlewares básicos
app.use(cors());          // libera requisições de outras origens
app.use(express.json());  // permite receber JSON no corpo das requisições

// -----------------------------------------------------------------------------
// ROTA BÁSICA PARA TESTE
// GET /
// -----------------------------------------------------------------------------
app.get("/", (req, res) => {
  res.json({ message: "API Flor está no ar 🌸" });
});

// -----------------------------------------------------------------------------
// "BANCO DE DADOS" EM MEMÓRIA - PEÇAS DA FLOR
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// ROTAS DE PEÇAS
// -----------------------------------------------------------------------------

// GET /pieces -> lista todas as peças
app.get("/pieces", (req, res) => {
  res.json(pieces);
});

// POST /pieces -> cria uma nova peça
app.post("/pieces", (req, res) => {
  const { name, type, colors, style, materials, price } = req.body;

  // Validação básica
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

// DELETE /pieces/:id -> remove uma peça pelo ID
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

  // 204 = sucesso, sem conteúdo
  return res.status(204).send();
});

// -----------------------------------------------------------------------------
// "IA" DE INSPIRAÇÃO - FUNÇÃO AUXILIAR
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// ROTA DE IA
// POST /ai/suggestions
// -----------------------------------------------------------------------------
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

// -----------------------------------------------------------------------------
// EXPORTA A APP PARA O SERVER.JS
// -----------------------------------------------------------------------------
module.exports = app;
