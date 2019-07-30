const modelLoader = require('../../utils/modelLoader')

const routerSetor = require('./routes/usuario')

const models = [
    '../modulos/usuario/model/usuario'
]

exports.init = (app) => {

    app.use('/', routerSetor)

}