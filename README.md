# Desafio Técnico Caronaê

Este projeto consiste na resolução do desafio técnico para o processo seletivo do Caronaê 2024.2. O Desafio consiste em implementar uma aplicação web que consuma dados de uma API Rest externa de caronas, contendo uma pagina para listar todas as caronas e uma pagina com os detalhes específicos de uma carona.



![Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Badge](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Badge](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=whitehttps://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
 
 
## Tabela de Conteúdo


 1. [Tecnologias utilizadas](#tecnologias-utilizadas)
 2. [Download](#download)
 3. [Utilização](#utilização)
 
## Tecnologias utilizadas

Essas são as frameworks e ferramentas que foram utilizadas no desenvolvimento deste projeto:

 - [React JS](https://react.dev/)
 - [Styled Components](https://styled-components.com/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Vite](https://vitejs.dev/)
 - [Docker](https://www.docker.com/)

## Download

*Para que seja possível a execução dos arquivos deste repositório, o usuário deve clonar através da ferramenta **[git](https://git-scm.com/downloads)**. Abrindo o terminal do seu sistema operacional ou o GitBash, insira o seguinte comando na pasta desejada:*

``` git
git clone https://github.com/GbAraujoSouza/desafio-tecnico-caronae-2024-2.git
```

## Utilização

### Utilizando Docker

É necessário ter o [docker](https://docs.docker.com/engine/install/) e o [docker compose](https://docs.docker.com/compose/install/) instalado e em execução no computador. Na pasta raiz do projeto, execute o comando:

``` bash
docker compose up

```
A aplicação poderá ser acessada então em [http://localhost:5173/](http://localhost:5173/)


### Node.js (alternativa)

Alternativamente, é possível instalar o projeto utilizando [Node.js](https://nodejs.org/en/download/package-manager). Na pasta raiz do projeto, instale as dependências com o comando:

``` bash
npm install

```

Em seguida, execute o projeto com o comando:
``` bash
npm run dev

```
Finalmente, a aplicação estará disponível em [http://localhost:5173/](http://localhost:5173/)


