const express = require('express');
const router = express.Router();

const registeringForEventController = require('../controllers/registeringForEventController')

router.post('/', registeringForEventController.register);

module.exports = router;