# 🌸 Relatório de Testes – API Flor

Documento de QA confirmando a validação completa das rotas e funcionalidades da API Flor.

---

## 📌 1. Informações Gerais

| Item | Detalhes |
|------|----------|
| **Projeto** | Flor API |
| **Responsável pela validação** | Diane de Matos |
| **Data da execução** | 01/12/2025 |
| **Versão testada** | v1.0.0 |
| **Ambiente** | Localhost – http://localhost:3000 |
| **Objetivo** | Validar todas as rotas da API, comportamento esperado, retornos HTTP e estabilidade. |

---

## 📌 2. Escopo dos Testes

✔ Validação das rotas REST (GET, POST, DELETE)  
✔ Validação do endpoint de IA  
✔ Validação do tratamento de erros  
✔ Validação do comportamento de JSON  
✔ Validação de obrigatoriedade de campos  
✔ Registro de evidências (prints/testes)  

Não incluso no escopo:  
❌ Testes de carga  
❌ Testes com banco SQL  
❌ Testes automatizados (próxima etapa do projeto)

---

## 📌 3. Cenários Testados

### **3.1 GET /pieces – Listar peças**
| Cenário | Resultado Esperado | Status |
|--------|---------------------|--------|
| Acessar rota | Deve retornar lista de peças com status 200 | ✔ Passou |
| Estrutura do objeto | Deve conter: id, name, type… | ✔ Passou |

📎 **Evidência**:  
![GET pieces](docs/evidencias/get-pieces.png)

---

### **3.2 POST /pieces – Criar peça**
| Cenário | Resultado Esperado | Status |
|--------|---------------------|--------|
| Criar peça válida | Deve retornar 201 com objeto criado | ✔ Passou |
| Enviar sem `name` | Deve retornar 400 | ✔ Passou |
| Enviar sem `type` | Deve retornar 400 | ✔ Passou |

📎 Evidências:
- ![POST sucesso](docs/evidencias/post-sucesso.png)  
- ![POST erro](docs/evidencias/post-erro.png)

---

### **3.3 DELETE /pieces/:id – Excluir peça**
| Cenário | Resultado Esperado | Status |
|--------|---------------------|--------|
| Deletar id existente | Deve retornar 204 | ✔ Passou |
| Deletar id inexistente | Deve retornar 404 | ✔ Passou |

📎 Evidência:  
![DELETE peça](docs/evidencias/delete-piece.png)

---

### **3.4 POST /ai/suggestions – IA**
| Cenário | Resultado Esperado | Status |
|--------|---------------------|--------|
| Enviar entrada válida | Retorna sugestão criativa | ✔ Passou |
| Enviar campos vazios | API retorna sugestão padrão | ✔ Passou |

📎 Evidência:  
![AI rota](docs/evidencias/ai-suggestion.png)

---

## 📌 4. Resumo da Validação

| Categoria | Status |
|----------|--------|
| Funcionalidade | ✔ OK |
| Tratamento de erros | ✔ OK |
| Retornos HTTP | ✔ OK |
| Estrutura JSON | ✔ OK |
| Estabilidade | ✔ OK |
| Documentação | ✔ OK |

---

## 📌 5. Bugs Encontrados

Nenhum bug identificado durante esta rodada.

> *Caso surjam problemas futuros, serão registrados na seção de Issues do GitHub.*

---

## 📌 6. Conclusão

A API Flor foi **validada com sucesso**.  
Todas as rotas estão funcionando conforme esperado e cobertas com evidências.  
O sistema está aprovado para avançar para:

- automação de testes de API  
- integração com front-end  
- organização em arquitetura completa (controllers/services/routes)  
- possível integração com banco SQL  

---

### ✨ Diane de Matos  
*Engenharia de Qualidade – Projeto Flor* 🌸
