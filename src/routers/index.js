const express = require('express');
const router = express.Router();

const healthRouter = require('./health');
const weatherRouter = require('./weather');

router.use('/health', healthRouter);
router.use('/weather', weatherRouter);

module.exports = router;

