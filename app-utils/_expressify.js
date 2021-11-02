const router = require('../src/routers');
const errorHandler = require('../src/modules/errorHandler/errorhandler');
const responseHandler = require('../src/modules/responseHandler');



exports.expressify = (app , callback) => {
    try{
        app.use(router);
        app.use(errorHandler);
        app.use(responseHandler);
        callback(null);
    }catch(e)
    {
        callback(e);
    }
}