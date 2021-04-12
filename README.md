<h1 align="center">PRIMEIROS PASSOS COM NODE.JS<h1>
<br>

Primeira API do projeto da ShareSH com parceria com Venturus - AfroDev 2

## Tecnologias utilizadas:

- Node
- Express
- Nodemon
- Mysql
- Consign

## Como utilizar?

```bash
# Dê um git clone
$ git clone https://github.com/benmacario/api-AfroDev.git

# Entre na pasta do projeto
$ cd api-AfroDev

# Instalando dependecias
$ npm install

# Ou
$ yarn
```

Você vai precisar do Mysql instalado na sua maquina, troque as chaves de conexão com o banco no arquivo [infra/conexao.js](src/infra/conexao.js), de acordo com o banco que você configurou na sua maquina!

```bash
# Para iniciar o servidor
$ npm start

# Ou
$ yarn start
```

Se de error com o seu mysql, tente mudar de mysql para mysql2.

1. Apague a pasta `node_modules`
2. No `package.js` em dependencies apague a linha do mysql
3. Dê um `npm install` ou `yarn` e instale o mysql2.

<hr>

Feito por [Brendon Machado](https://linkedin.com/in/brendon-machado).
