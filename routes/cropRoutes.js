const router = require('express').Router();
const { getCrops, addCrop, deleteCrop } = require('../controllers/cropController');
router.get('/', getCrops); router.post('/', addCrop); router.delete('/:id', deleteCrop);
module.exports = router;