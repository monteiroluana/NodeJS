'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const usuario = require('./modulos/usuario/usuario')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

usuario.init(app)

module.exports = app

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`A NodeJS API is listenig on port: ${port}`);
});