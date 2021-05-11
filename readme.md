API utilizando koa, knex, bookshelf

```bash
# Clone este repositório
$ git clone https://github.com/wellkamp/bookshelf-knex-metrics.git

# Acesse a pasta do projeto no terminal
$ cd bookshelf-knex-metrics

# Instale as dependências
$ npm install

# Configurar o arquivo knexfile.js com usuario e senha do banco de dados mysql

# Acesse a pasta do projeto da api no terminal
$ cd api

# Rodar as migrações do knex
$ npx knex migrate:latest

# Executar a aplicação
$ npm start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
