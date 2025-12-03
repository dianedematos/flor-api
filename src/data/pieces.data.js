// -----------------------------------------------------------------------------
// ESTE ARQUIVO SIMULA UM "BANCO DE DADOS" EM MEMÓRIA
// Aqui vamos armazenar as peças da Flor. Mais pra frente podemos trocar por SQL.
// -----------------------------------------------------------------------------

// Lista inicial de peças (nosso banco "fake")
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

// Função que retorna TODAS as peças
function getPieces() {
  return pieces;
}

// Função que adiciona uma nova peça
function addPiece(piece) {
  // cria o novo objeto com ID automático
  const newPiece = {
    id: pieces.length + 1,
    ...piece
  };

  pieces.push(newPiece); // adiciona ao array
  return newPiece;
}

// Função que remove uma peça pelo ID
function deletePiece(id) {
  const beforeCount = pieces.length;

  // mantém só os itens cujo ID é diferente do que queremos deletar
  pieces = pieces.filter(p => p.id !== id);

  // se o tamanho mudou -> deletou
  return beforeCount !== pieces.length;
}

// Exporta as funções para outros arquivos poderem usar
module.exports = {
  getPieces,
  addPiece,
  deletePiece
};
