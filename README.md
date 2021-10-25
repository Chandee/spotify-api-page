# spotify-api-page

Este projeto utiliza a [API do spotify](https://developer.spotify.com/documentation/web-api/reference/#/) para ter acesso aos dados, assim podendo utilizar:

- Busca pelos albums de artistas/músicas
- Escutar a preview da música contida no album

## Instalando o projeto

Para instalar o projeto

```sh
 npm install
```

ou

```sh
yarn install
```

## Configurações

O projeto conta com váriaveis de ambiente, para isso é necessário setar um arquivo .env na raiz do projeto. Dentro desse arquivo deve-se conter a seguinte configuraçao:

```sh
API=https://api.spotify.com/v1
CLIENT_ID=chave_client_id
SERVER_AUTH=https://accounts.spotify.com/authorize
URL_REDIRECT=http://localhost:3000
```

Para utilizar o CLIENT_ID deve ser criado uma [aplicação no spotify](https://developer.spotify.com/documentation/general/guides/authorization/app-settings/), após criar e conseguir a chave deve-se substituir o <i>chave_client_id</i> pelo CLIENT_ID obtido. Com isso sua aplicação estará apta para ser autenticada

A URL_REDIRECT é a url base de retorno após a autenticação, podendo ser alterada de acordo com o projeto (Exemplo: http<span>://</span>localhost:8000), caso seja trocada a porta do projeto localmente deve se alterar também a porta no arquivo <i>webpack.config.js</i>

```javascript
 devServer: {
    ...
    port: sua porta,
  }
```

Após as configurações, para executar localmente o projeto

```sh
npm run start
```

ou

```sh
yarn run start
```

## Testes

Para executar os testes

```sh
npm run test
```

ou

```sh
yarn run test
```

Para testes com coverage

```sh
npm run test:coverage
```

ou

```sh
yarn run test:coverage
```

## Build

Para rodar o build

```sh
npm run build
```

ou

```sh
yarn run build
```
