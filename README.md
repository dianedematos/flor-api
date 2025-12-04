# 🌸 Flor de Novembro – API Artesanal

API REST simples e didática que simula a loja artesanal fictícia **Flor de Novembro**, especializada em mandalas, filtros dos sonhos e outros itens feitos à mão.

Este projeto foi criado para **estudo e portfólio**, com foco em:

- Prática de **desenvolvimento de APIs**
- Rotina real de **QA** (cenários, evidências, documentação)
- Organização de **projeto ágil** usando Jira, Confluence e GitHub

---

## 🎯 Objetivo

Construir um **ecossistema completo** que envolva:

- API em **Node.js + Express**
- **Testes manuais estruturados** (Gherkin + evidências)
- **Documentação técnica** (Confluence + /docs + /qa)
- **Gestão de tarefas e épicos** no Jira
- **Versionamento** no GitHub

Tudo isso representando o contexto da marca **Flor de Novembro**, unindo:
> flores, cores, magia artesanal e tecnologia 🌺✨

---

## 🧩 Funcionalidades da API

### 📦 Peças Artesanais

Rotas iniciais (CRUD básico):

| Método | Rota          | Descrição                      |
|--------|---------------|--------------------------------|
| GET    | `/pieces`     | Lista todas as peças           |
| POST   | `/pieces`     | Cria uma nova peça             |
| DELETE | `/pieces/:id` | Remove uma peça existente      |

### 🎨 Estrutura de uma Peça

```json
{
  "id": 1,
  "name": "Mandalinha Flor de Novembro",
  "type": "mandala",
  "colors": ["roxo", "rosa", "verde"],
  "style": "boho",
  "materials": ["linha de algodão", "miçangas"],
  "price": 89.9
}
```

### 🤖 Rota Inteligente (IA) – Futuro

- `POST /ai/suggestions`  
  Retornará sugestões de peças com base em:
  - humor
  - cores preferidas
  - estilo desejado

> Esta rota faz parte do roadmap e será implementada em uma próxima fase.

---

## 🧰 Tecnologias

- **Node.js**
- **Express**
- Nodemon
- Git / GitHub
- Postman (testes manuais)
- Jira (backlog, épicos, histórias)
- Confluence (documentação)

---

## 📂 Estrutura do Projeto

```bash
flor-api/
│
├── src/
│   ├── controllers/
│   ├── data/
│   │   └── pieces.data.js
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
│
├── docs/
│   └── guia-api-flor.md
│
├── qa/
│   ├── docs/
│   │   └── QA-Relatorio-de-Testes.md
│   └── evidencias/
│
├── package.json
└── README.md
```

---

## 🚀 Como rodar o projeto

### ✅ Pré-requisitos

- Node.js instalado (versão LTS recomendada)
- NPM ou Yarn
- Git

### 📥 Instalação

```bash
# clonar o repositório
git clone https://github.com/dianedematos/flor-api

cd flor-api

# instalar dependências
npm install
# ou
yarn
```

### ▶ Executar em desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Por padrão, a API sobe em algo como:

```text
http://localhost:3000
```

> A porta pode ser configurada em `server.js` ou via variável de ambiente.

---

## 🔍 Testes & QA

Este projeto foi pensado para treinar **rotinas reais de QA**:

- Cenários de teste em **formato Gherkin** (Confluence / qa/docs)
- Testes manuais via **Postman**
- **Evidências** salvas em `/qa/evidencias`
- **Relatório de testes** em:  
  `qa/docs/QA-Relatorio-de-Testes.md`

Exemplos de cobertura de teste:

- ✔ Happy path (fluxo ideal)
- ✔ Validações de campos obrigatórios
- ✔ Casos negativos (erro de entrada, id inexistente)
- ✔ Cenários baseados em critérios de aceite definidos no Jira

---

## 📅 Workflow do Projeto

Fluxo que simula o dia a dia em uma empresa:

1. Criar **épico** no Jira
2. Detalhar **histórias** com critérios de aceite
3. Criar **subtarefas** (dev, QA, docs)
4. Implementar a rota na API
5. Testar via Postman e registrar **evidências**
6. Documentar no **Confluence**
7. Fazer **commit** e push no GitHub
8. Atualizar status das issues no Jira

---

## 🗺 Roadmap

- [ ] Implementar rota `POST /ai/suggestions`
- [ ] Adicionar validações mais robustas (campos obrigatórios, tipos, etc.)
- [ ] Criar testes automatizados (ex: Jest / Supertest)
- [ ] Adicionar Swagger ou outra forma de documentação viva da API
- [ ] Publicar a API em algum ambiente (ex: Render, Railway, etc.)

---

## 💜 Sobre a Flor de Novembro

**Flor de Novembro** é uma marca artesanal que mistura:

- crochê
- flores
- cores
- mandalas
- filtros dos sonhos

Este projeto traz essa essência para o mundo digital, como um **laboratório de estudo de QA e desenvolvimento**, unindo arte e tecnologia.

---

## 📫 Contato

Se você quiser trocar uma ideia sobre QA, APIs ou artesanato:

- 💼 LinkedIn: _https://www.linkedin.com/in/dianedematos/_
- 🧶 Instagram / Flor de Novembro: _https://www.instagram.com/flordenovembro/_
