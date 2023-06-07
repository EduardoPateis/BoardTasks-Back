## BoardTasks-Back

Criando o BackEnd de uma aplicação gestora de tarefas

----------------------------------------------------------------------------------
#### Preparando o ambiente:

```
 
   npx express-generator --no-view
   
```
----------------------------------------------------------------------------------
#### Criar o commando “dev” no arquivo packge.json:

```
	"scripts":{
		"dev": "npx nodemon ./bin/www"
	}
	
	Salvar - Ctrl + S
	
	npm install y
```
---------------------------------------------------------------------------------

#### Preparando a documentação e os tratamentos para o banco MongoDB

```
	npm i swagger-autogen swagger-ui-express mongoose mongoose-to-swagger cors dotenv

```
---------------------------------------------------------------------------------

### Adicionado no _**app.js**_:

```
const cors = require('cors');
require('dotenv').config();
app.use(cors());
```
----------------------------------------------------------------------------------
### Executando o projeto:

1. Colocar este repositório em seu computador;
2. Copiar o arquivo EXEMPLO.env que está na pasta raiz daquele projeto e renomeá-lo para .env para que as variáveis de ambiente sejam definidas;
3. Executar o comando "npm install" no terminal na pasta raiz do projeto;
4. Executar o comando "npm run dev" no terminal na pasta raiz do projeto, para iniciar o servidor back-end;
5. Para acessar a documentação da API acesse o seu navegador o endereço http://localhost:4000/









----------------------------------------------------------------------------------
### Autor:

Feito com ❤️ por Eduardo 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Eduardo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/eduardo-pateis-joaquim/)](https://www.linkedin.com/in/eduardo-pateis-joaquim/)