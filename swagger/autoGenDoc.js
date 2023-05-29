const mongooseToSwagger = require('mongoose-to-swagger');
// const EsquemaTarefa = require('../scr/model/tarefa.js');
// const EsquemaUsuario = require('../scr/model/usuario.js');
const swaggerAutogen = require('swagger-autogen')
({
    opneapi:'3.0.0',
    language: 'pt-BR',
})
const outputFile = './swagger_output.json';
const endpointsFiles = ['../index.js' /*,'../src/routes.js' */];

let doc ={
    info:{
        version:"1.0.0",
        title: "API do BroadTasks",
        description: "Documentação da API do BroadTasks."
    },
    servers:[
        {
        url: 'http://localhost:4000',
        description: "Servidor Local - Local Host"
    },
    {
        url: "https://boardtasks-back.vercel.app",
        description: "Servidor de produção."
    }
    ],
    consumes: ['application/json'],
    produces: ['application/json']//,
    // securityDefinitions:{
    //     api_key:{
    //         type:"apiKey",
    //         name:"api_key",
    //         in:"header"
    //     }

    // },
    // components:{
    //     schemas:{
    //         Usuario:mongooseToSwagger(EsquemaUsuario),
    //         Tarefa: mongooseToSwagger(EsquemaTarefa),
    //     }
    // }
}
swaggerAutogen:(outputFile, endpointsFiles, doc).then( () => {
    console.log("Documentação do Swagger gerada encontra-se no arquivo em: "+ outputFile);
    if(process.env.NODE_ENV !== 'production'){
        require("../index.js");
    }

})