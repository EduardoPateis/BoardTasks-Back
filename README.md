## BoardTasks-Back

Criando o BackEnd de uma aplicação gestora de tarefas

#### Preparando o ambiente:

```
 
   npx express-generator --no-view
   
```

#### Criar o commando “dev” no arquivo packge.json:

```
	"scripts":{
		"dev": "npx nodemon ./bin/www"
	}
	
	Salvar - Ctrl + S
	
	npm install y
```
#### Preparando a documentação e os tratamentos para o banco MongoDB

```
	npm i swagger-autogen swagger-ui-express mongoose mongoose-to-swagger cors dotenv

```

### Adicionado no _**app.js**_:

```
const cors = require('cors');
require('dotenv').config();
app.use(cors());
```



### Autor:

Feito com ❤️ por Eduardo 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Eduardo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/eduardo-pateis-joaquim/)](https://www.linkedin.com/in/eduardo-pateis-joaquim/)