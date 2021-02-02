const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'orcioly', 'or150378', {
    host: 'localhost',
    dialect: 'mysql'

});


const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: 'Um titulo qualquer',
    conteudo: 'asdfasdfasd'
});



const Usuario = sequelize.define('usuarios', {
    Nome: {
        type: Sequelize.STRING
    },
    Sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.create({
    nome: 'Orcioly',
    sobrenome: 'Andrade Alves',
    idade: 42,
    email: 'orcioly@techmicro.com.br'
});

// Usuario.sync({ force: true });



// Cria tabela

// Postagem.sync({force: true});




// Teste de conexão com o banco de dados

// sequelize.authenticate().then(function(){
//     console.log('Conectado com sucesso!');
// }).catch(function(erro){
//     console.log('Falha ao conectar: ' + erro);
// });