# Beauty2U API

API desenvolvida em NodeJS 14.0.0

## Setup

- Rodar o comando `npm i` para instalar as dependências.
- Instalar o Knex globalmente com o comando `npm i -g knex`.
- Fazer uma cópia do arquivo .env.example, renomear para apenas `.env` e preencher com os dados do seu ambiente.
- Iniciar o terminal do node e rodar o comando `require('crypto').randomBytes(128).toString('hex')`.
- Copie o código gerado e cole no campo `TOKEN_SECRET` do arquivo .env.

## Migrations

Após criar a base do projeto no MYSQL, rodar o comando `knex migrate:latest`.

## Executar

Executar o comando `npm run dev` para rodar a API.

## Knex - Comandos

Segue uma lista dos comandos que provavelmente serão mais usados:

- Gerar migration: `knex migrate:make nome_da_migration`
- Rodar migrations: `knex migrate:latest`
- Gerar seed: `knex seed:make nome_da_seed`
- Rodar seed: `knex seed:run`
- Dar Rollback na última migration executada: `knex migrate:rollback`






