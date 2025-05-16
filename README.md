# 🎭 Testes Automatizados com Playwright - UNIFIP

Este repositório contém a automação de testes end-to-end utilizando [Playwright](https://playwright.dev/) para validação de funcionalidades do sistema da UNIFIP.

## 📂 Estrutura do Projeto


├── pageObjects/          # Page Object Models com a lógica e elementos das páginas
│   ├── CreatePDDPage.js
│   ├── FooterLinksPage.js
│   ├── HeaderPage.js
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── SearchBarPage.js
│   └── SocialMediaPage.js
│
├── tests/                # Testes organizados por área funcional
│   ├── login/
│   │   ├── loginInvalido.spec.js
│   │   └── loginValido.spec.js
│   └── navegando/
│       ├── createPDD.spec.js
│       ├── dashboardUnifip.spec.js
│       ├── headerNavigation.spec.js
│       ├── navegandoUnifip.spec.js
│       └── searchBar.spec.js
│
├── playwright.config.js  # Configuração do Playwright
├── package.json          # Dependências e scripts do projeto
├── .gitignore
└── README.md

🚀 Tecnologias
Playwright
Node.js 18+
JavaScript ES6+
Page Object Model (POM)
Testes E2E com boas práticas

🛠️ Instalação
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install

▶️ Executando os testes
Todos os testes:
npx playwright test
Um teste específico:
npx playwright test tests/login/loginValido.spec.js
Executar com UI (modo interativo):
npx playwright test --ui
🧪 Gerando relatório
Após executar os testes:
npx playwright show-report
