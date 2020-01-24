const express = require('express')
const router = express.Router()
const controller = require('../controllers/user.controller')

//GET
router.get('/', controller.index)
router.get('/:id', controller.getUserByID)

//POST
router.post('/addUser', controller.addUser)

//PUT
router.put('/:id', controller.updateUser)

//DELETE
router.delete('/:id', controller.deleteUser)

module.exports = router