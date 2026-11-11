const router = require('express').Router();
const { getBuyers, addBuyer } = require('../controllers/buyerController');
router.get('/', getBuyers); router.post('/', addBuyer);
module.exports = router;