const express = require('express');
const router = express.Router();
const { getWorkers, addWorker, deleteWorker } = require('../controllers/workerController');

router.get('/', getWorkers);
router.post('/', addWorker);
router.delete('/:id', deleteWorker);

module.exports = router;