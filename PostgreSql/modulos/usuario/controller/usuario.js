'use strict'

const model = require('../../../utils/modelLoader')

exports.read = (req, res) => {

    model.usuario.findAll({
    }).then((data) => {

        res.send(data)

    }).catch((error) => {
        console.log(error)
        res.send(error)
    });
};

exports.insert = (req, res) => {
    console.log("insert")

    const dados = req.body

    model.usuario
        .build(
            dados
        )
        .save()
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        })
}

exports.update = (req, res) => {

    const dados = req.body

    model.usuario
        .update(dados, {
            where: {
                id: req.query.id
            }
        })
        .then((data) => {
            res.send(true)
        }).catch((error) => {
            console.log(error)
            res.send(false)
        })
}

exports.delete = (req, res) => {

    const dados = req.body

    model.usuario
        .destroy({
            where: {
                id: dados.params.id
            }
        })
        .then((rowDeleted) => {
            res.send(true)
        }, (err) => {
            console.log(err)
            res.send(false)
        })
}