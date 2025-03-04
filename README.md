SOBRE O PROJETO

Este projeto foi desenvolvido como parte do teste prático para a vaga na Be Talent. A aplicação exibe uma lista de funcionários, onde é possível pesquisar por nome, cargo e telefone. A interface é responsiva, com um design adaptável tanto para dispositivos móveis quanto para desktop.

FUNCIONALIDADES

-Exibição de uma lista de funcionários com foto, nome, cargo, data de admissão e telefone;
-Busca por nome, cargo e telefone com filtro dinâmico;
-Expansão de detalhes de cada funcionário em dispositivos móveis;
-Design responsivo para telas de diferentes tamanhos.

PRÉ-REQUISITOS

Antes de rodar o projeto, certifique-se de que você tem as seguintes ferramentas instaladas:

-Node.js (v14 ou superior);

-NPM (gerenciador de pacotes, que vem junto com o Node.js).

INSTRUÇÔES PARA RODAR A APP

1. Clonando o repositório
Primeiro, clone o repositório para o seu ambiente local:
git clone https://github.com/usuario/nome-do-repositorio.git

2. Instalando as dependências
Após clonar o repositório, navegue até o diretório do projeto e instale as dependências utilizando o NPM:
cd nome-do-repositorio
npm install

3. Rodando a aplicação
Agora, execute o seguinte comando para rodar o servidor de desenvolvimento:
npm start
Isso abrirá a aplicação no navegador em http://localhost:3000.


4. API de Funcionários 
Para funcionar corretamente, o projeto faz uma requisição para uma API local (http://localhost:3000/employees) para obter os dados dos funcionários.
Na pasta onde está o db.json, terá que abrir no terminal e executar com as instruções abaixo indicadas.
Execute o JSON Server para criar a API local:
json-server --watch db.json --port 3000

Agora, a aplicação React estará consumindo os dados da API mockada no localhost:3000.

ESTRUTURA DO PROJETO

/funcionários

├── /images              # Imagens do Projeto

├── /node_modules        # Dependências do projeto

├── /public              # Arquivos estáticos

├── /src                 # Código-fonte da aplicação

│   ├── /assets          # Pasta para armazenar recursos estáticos como imagens, fontes, dados

│   ├── /components      # Componentes do React (ex: Navbar)

│   ├── App.jsx          # Componente principal

│   ├── app.css          # Arquivo de estilos

│   └── main.js          # Ponto de entrada principal (renderização da aplicação)

│   └── index.js         # Arquivo de configuração para a renderização (geralmente index.js ou main.js)

├── db.json              # Arquivo JSON com os dados dos funcionários

├── package.json         # Dependências e configurações do projeto

└── README.md            # Documentação do projeto


Tecnologias Utilizadas

- React: Biblioteca JavaScript para construir interfaces de usuário.
- Font Awesome: Ícones utilizados na aplicação.
- JSON Server: Para simular uma API local.
- CSS: Estilização da aplicação (com responsividade).
