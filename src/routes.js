function routes(app) {
    app.use('/users', require('./routes/users.js'));
    //app.use('/usuario', require('./routes/usuario.js'));
    //app.use('/tarefa', require('./routes/tarefa.js'));
    return;
}

module.exports = routes;