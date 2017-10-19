const express = require('express')
const router = express.Router()
const GenericController = require('./controller')
const model = require('./model')

const actions = new GenericController(model)

router
    .get('/', actions.index)


module.exports = router