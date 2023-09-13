# API de Gerenciamento de livros

Esta API disponibiliza um CRUD de livros, incluindo a criação, atualização, recuperação e exclusão de livros.

## Pré-requisitos

Certifique-se de que você tenha as seguintes dependências instaladas:

- Node.js
- Express.js
- Knex.js
- Banco de dados configurado de acordo com o knexfile.js

## Configuração

Certifique-se de configurar corretamente o arquivo `knexfile.js` para se conectar ao seu banco de dados.

## Para iniciar o projeto

Para instalar os módulos execute:

```
node install
```

Para iniciar o projeto execute:

```
node ./server.js
```

## Endpoints

### Listar Todos os livros [`GET`]

```
[host]/api/books
```

### Buscar livro por ID [`GET`]

```
/books/:id_book
```

### Criar um Novo livro [`POST`]

```
/books
```

Exemplo do corpo da request:

```
{
    "nome": "A bela e a fera",
    "autor": "José Chico",
    "genero": "Romance"
}
```

### Atualizar dados de um livro [`PUT`]

```
/books/:id_book
```

Exemplo do corpo da request:

```
{
    "nome": "A Fera e a Bela",
    "autor": "José Chico",
    "genero": "Romance"
}
```
    
### Excluir livro [`DELETE`]

```
/books/:id
```