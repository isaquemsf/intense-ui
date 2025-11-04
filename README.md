# Intense UI

## 🎨 Visão Geral

Este é o repositório do projeto frontend da **Intense**, uma revista de moda universitária. A interface foi construída com React e Vite, focando em uma experiência de usuário moderna, responsiva e fiel à identidade visual da marca.

O site interage com a `intense-api` para buscar mensagens personalizadas geradas por IA, proporcionando uma experiência única para cada usuário.

---

## ✨ Funcionalidades Principais

-   **Componentização com React**: Interface construída com componentes reutilizáveis e organizados.
-   **Design Responsivo**: Layout totalmente adaptável para uma experiência perfeita em desktops, tablets e celulares.
-   **Estilização Consistente**: Uso de `styled-components` e um tema global para garantir a fidelidade à identidade visual (cores, fontes).
-   **Navegação Rápida**: Roteamento do lado do cliente com `react-router-dom` para uma navegação fluida e sem recarregamento de página.
-   **Feedback ao Usuário**: Notificações "Toast" para avisos e estados de carregamento para operações assíncronas.

---

## 🛠️ Stack Tecnológica

-   **React 18**
-   **Vite**: Ferramenta de build e desenvolvimento ultrarrápida.
-   **Styled Components**: Para CSS-in-JS e estilização componentizada.
-   **React Router DOM**: Para roteamento.
-   **Axios**: Para requisições HTTP à `intense-api`.
-   **React Hot Toast**: Para notificações não-invasivas.

---

## 🚀 Como Rodar Localmente

Para executar a interface no seu ambiente de desenvolvimento, siga os passos abaixo.

### Pré-requisitos

-   **Node.js** na versão 18 ou superior.
-   **npm** ou **yarn**.
-   A **`intense-api` (backend) precisa estar rodando** localmente em `http://localhost:8080`.

### Configuração

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/isaquemsf/intense-ui.git
    cd intense-ui
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**
    -   Na raiz do projeto, crie um arquivo chamado `.env.development`.
    -   Adicione a URL da sua API local neste arquivo:
    ```
    # .env.development
    VITE_API_BASE_URL=http://localhost:8080/api
    ```

### Execução

1.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

2.  A aplicação estará disponível em `http://localhost:5173` (ou outra porta indicada pelo Vite).

---

## 🏛️ Estrutura de Pastas

O projeto segue uma estrutura de pastas organizada para máxima manutenibilidade:
```
src
├── assets/          # Fontes e imagens estáticas
├── components/      # Componentes reutilizáveis (Button, Header, etc.)
├── pages/           # Componentes de página (Home, About, etc.)
├── services/        # Lógica de chamadas de API (Axios)
└── styles/          # Estilos globais e tema (GlobalStyle, theme)
```
---
