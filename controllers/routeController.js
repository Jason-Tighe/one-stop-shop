const express = require('express');
const router = express.Router();
const viewController = require('./viewController')
const dataController = require('./dataController')

// Index
router.get('/', dataController.index, viewController.index)
// New
//DELETE
router.delete('/:id', dataController.destroy, viewController.redirectHome)
//Update
router.put('/:id', dataController.update, viewController.redirectShow)
//Create
router.post('/', dataController.create, viewController.redirectHome)
//Edit
router.get('/:id/edit', dataController.show, viewController.edit)
//show
router.get('/:id', dataController.show, viewController.show)
///BUY
router.get('/:id/buy', dataController.buy, viewController.redirectShow)


module.exports = router
