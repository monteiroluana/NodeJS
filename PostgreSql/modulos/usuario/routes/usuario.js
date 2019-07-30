const express = require('express')
const router = express.Router()

const controller = require('../controller/usuario')

router.get('/listUsuario', controller.read)
router.post('/saveUsuario', controller.insert)
// router.post('/updateSetor', controller.update)
// router.post('/deleteSetor', controller.delete)

module.exports = router