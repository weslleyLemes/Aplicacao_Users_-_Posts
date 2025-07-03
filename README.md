Users & Posts - React App
Este projeto é uma aplicação React que consome dados da API JSONPlaceholder para listar usuários e seus respectivos posts.

Demo
Acesse a aplicação hospedada: https://aplicacao-users-posts.vercel.app/

Funcionalidades
Lista de usuários com nome, email, cidade e empresa

Visualização dos posts do usuário em um modal

Ao clicar em um post, exibe o conteúdo completo em um segundo modal

Simulação de carregamento com barra progressiva

Layout responsivo com Tailwind CSS

Tratamento de erros com alertas visuais

Tecnologias utilizadas
React
React Router DOM
Tailwind CSS
Vite Create React App
Vercel (deploy)

Como executar localmente
Clone o repositório:

git clone https://vercel.com/weslley-lemes-projects/aplicacao-users-posts
Instale as dependências:
npm install
Inicie o servidor de desenvolvimento:
npm run dev    # ou npm start, se estiver usando CRA
Acesse em: http://localhost:3000

Estrutura do projeto
css
src/
├── components/
│   ├── LoadingProgress.jsx
│   └── UserPostsModal.jsx
├── pages/
│   └── Users.jsx
├── App.jsx
├── main.jsx
Deploy com Vercel

A barra de loading possui um atraso artificial de 4 segundos para simular experiência de carregamento real.

