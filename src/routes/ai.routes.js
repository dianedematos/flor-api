// src/routes/ai.routes.js
// -----------------------------------------------------------------------------
// ROTAS DE /ai
// -----------------------------------------------------------------------------

const express = require("express");
const router = express.Router();

const aiController = require("../controllers/ai.controller");

// POST /ai/suggestions → gera uma sugestão de peça
router.post("/suggestions", aiController.getSuggestion);

// Exporta o router para ser usado no app.js
module.exports = router;
