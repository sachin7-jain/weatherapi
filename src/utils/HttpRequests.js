const util = require('util');
const request = require('request');
const promisifiedReq = util.promisify(request).bind(request);


module.exports.GenericHTTPCall = async ({ method, url, headers, formData, body }) => {
  const gen_body = await promisifiedReq({ method, url, headers, formData, body });
  return gen_body;
}