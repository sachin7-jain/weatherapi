const weatherService = require('../services/weather');



module.exports.getWeatherAPI = async (req, res, next) => {
    try {
        req.response.data = await weatherService.getWeatherAPI(req);
        next();
    } catch (error) {
        next(error)
    }
}

module.exports.getWeatherBasedOnCities = async (req, res, next) => {
    try{
        req.response.data = await weatherService.getWeatherBasedOnCities(req);
        next();
    }
    catch(error) {next(error)}
}