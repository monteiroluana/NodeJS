const express = require('express')
const router = express.Router()

const controller = require('../controller/usuario')

router.get('/', controller.read)
router.get('/:nome', controller.getByName)
router.post('/usuario', controller.insert)
router.put('/usuario', controller.update)
router.delete('/usuario', controller.delete)

module.exports = router