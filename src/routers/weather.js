const express = require('express');
const router = express.Router();

const weatherController = require('../controllers/weather');

router.get('/', weatherController.getWeatherAPI);

router.post('/cities',weatherController.getWeatherBasedOnCities);

module.exports = router;




