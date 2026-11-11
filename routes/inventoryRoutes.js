const router = require('express').Router();
const { getInventory, addInventory } = require('../controllers/inventoryController');
router.get('/', getInventory); router.post('/', addInventory);
module.exports = router;