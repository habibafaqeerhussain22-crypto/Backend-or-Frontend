const router = require('express').Router();
const { getEquipment, addEquipment, deleteEquipment } = require('../controllers/equipmentController');
router.get('/', getEquipment); router.post('/', addEquipment); router.delete('/:id', deleteEquipment);
module.exports = router;