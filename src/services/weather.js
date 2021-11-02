const httpRequest = require('../utils/HttpRequests');
const util = require('util');
const config = require('../../config/data/config.json');
const request = require('request');
const { response } = require('express');

module.exports.getWeatherAPI = async (req) => {
    let promisifiedRequest = util.promisify(request);
    return await promisifiedRequest({
      method: config.appMgmt.getWeather.method,
      url: config.appMgmt.getWeather.url +"q=" + config.appMgmt.getWeather.cityName +"&appid="+ config.appMgmt.getWeather.api_key,
    //  '858f15fed9292cbe25c341a754c55e45',  //,
      headers:
      {
        'content-type': 'application/json'
      },
      json: true
    });
   // return body.data;
}

module.exports.getWeatherBasedOnCities = async(req) => {
  let requestBody =  req.body.data.join(',');
  let promisifiedRequest = util.promisify(request);
  return await promisifiedRequest({
    method: config.appMgmt.getWeather.method,
    url: config.appMgmt.getWeather.url +"q=" + requestBody +"&appid="+ config.appMgmt.getWeather.api_key,
  //  '858f15fed9292cbe25c341a754c55e45',  //,
    headers:
    {
      'content-type': 'application/json'
    },
    json: true
  });
}
