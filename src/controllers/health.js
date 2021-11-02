const constants = require('../../constants');

module.exports.get =(res) =>{
    return new Promise((resolve, reject) => {
        resolve({
            code : constants.HTTP_200,
            message : ` Server is alive and uptime is : ${process.uptime()}`
        })
    })
}