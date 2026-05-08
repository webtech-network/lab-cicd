# 🚀 Lab CI/CD — Node.js + Prisma + Docker

> Lab prático de CI/CD com GitHub Actions, cobrindo lint, testes, build e publicação de imagem Docker.

---

## 📋 Sobre o Projeto

Este repositório é um laboratório avançado que demonstra uma pipeline de CI/CD completa para uma aplicação Node.js com banco de dados (Prisma ORM) e containerização via Docker.

A ideia central é mostrar como automatizar todas as etapas de qualidade e entrega de software: desde a verificação de estilo de código até a publicação da imagem em um registry.

---

## 🛠️ Stack

| Tecnologia | Papel |
|---|---|
| **Node.js 20** | Runtime da aplicação |
| **Express** | Framework HTTP |
| **Prisma ORM** | Acesso ao banco de dados |
| **Jest + Supertest** | Testes automatizados |
| **ESLint** | Análise estática de código |
| **Docker** | Containerização |
| **GitHub Actions** | Pipeline CI/CD |

---

## 📁 Estrutura do Projeto

```
lab-cicd/
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline principal
├── prisma/
│   └── schema.prisma       # Schema do banco de dados
├── src/
│   └── server.js           # Aplicação Express
├── tests/                  # Testes automatizados
├── .eslintrc.json          # Regras de lint
├── Dockerfile              # Imagem Docker
└── package.json
```

---

## ⚙️ Como Rodar Localmente

### Pré-requisitos

- Node.js 20+
- Docker (opcional)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/webtech-network/lab-cicd.git
cd lab-cicd

# Instale as dependências
npm install

# Gere o Prisma Client
npx prisma generate
```

### Scripts disponíveis

```bash
npm start        # Inicia a aplicação (porta 3000)
npm test         # Executa os testes com Jest
npm run lint     # Verifica o código com ESLint
```

### Com Docker

```bash
# Build da imagem
docker build -t lab-cicd .

# Rodar o container
docker run -p 3000:3000 lab-cicd
```

---

## 🔄 Pipeline CI/CD

A pipeline é disparada em todo `push` ou `pull_request` para a branch `main`. Os jobs rodam em paralelo onde possível e são separados por responsabilidade:

```
push/PR para main
       │
       ├──► [lint]    → Verifica estilo e qualidade do código
       │
       ├──► [test]    → Executa testes Jest com cobertura

```

### Jobs

| Job | Trigger | O que faz |
|---|---|---|
| `lint` | push / PR | Roda ESLint em `src/` e `tests/` |
| `test` | push / PR | Executa Jest e gera relatório de cobertura |


---

## 📄 Workflows

Os arquivos de workflow ficam em `.github/workflows/`. Veja a pasta para detalhes de cada job.

---

## 📌 Conceitos Abordados

- **CI (Integração Contínua)**: validação automática a cada commit
- **Dependência entre jobs**: build só roda após lint e test passarem
- **Artefatos**: relatórios de cobertura de testes são salvos no workflow
- **Secrets**: credenciais do Docker Registry gerenciadas com segurança

