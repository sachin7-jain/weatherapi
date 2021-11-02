const constants = require('../../../constants');

module.exports = (req, res, next) => {
    let code = (typeof req.response === 'undefined') ? 200 :  req.response.code;
    let message = (typeof req.response === 'undefined') ? '' : req.response.message;
    let data = (typeof req.response === 'undefined') ? {} : req.response.data;

    res.status(code || constants.HTTP_200).json({
        sucess : true,
        statuscode : code,
        message : message,
        data : data
    }).end();

}