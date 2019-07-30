const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require("morgan");

const usuario = require('./modulos/usuario/usuario')

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

usuario.init(app)

module.exports = app

const port =  3000;
app.listen(port, () => {
    console.log(`A NodeJS API is listenig on port: ${port}`);
});