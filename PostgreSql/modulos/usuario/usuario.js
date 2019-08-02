const routerUsuario = require('./routes/usuario')

exports.init = (app) => {
    app.use('/', routerUsuario)
}