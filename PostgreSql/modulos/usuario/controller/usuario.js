const model = require('../../../utils/modelLoader')

exports.read = (req, res) => {
    model.usuario.findAll({
    }).then((data) => {
        res.send(data)
    }).catch((error) => {
        res.send(error)
    });
};

exports.getByName = (req, res) => {
    model.usuario.findOne({
        where:{ nome: req.params.nome}
    }).then((data) => {
        if(data){
            res.send(data)
        }else{
            res.send("usuário não encontrado em nossa base de dados!")
        }
    }).catch((error) => {
        res.send(error)
    });
};

exports.insert = (req, res) => {
    const user = req.body
    model.usuario
        .build( user )
        .save()
        .then((data) => {
            res.send("usuario insert: "+true)
        }).catch((error) => {
            res.send(error)
        })
}

exports.update = (req, res) => {
    const user = req.body
    model.usuario
        .update(user, {
            where: {
                id: user.id
            }
        })
        .then((data) => {
            res.send("usuario update: "+true)
        }).catch((error) => {
            res.send(error)
        })
}

exports.delete = (req, res) => {
    const user = req.body
    model.usuario
        .destroy({
            where: {
                id: user.id
            }
        })
        .then((rowDeleted) => {
            res.send("usuario delete: "+true)
        }, (err) => {
            res.send(err)
        })
}