const configFile = require('../config/config');
const cors = require('cors');
const bodyParser = require('body-parser');

let config = null;

exports.initialize =(app, callback) => {

    configFile.createConfig((err) => {
        if(err) {callback(null)}
        else {
            config = Object.assign({}, global.config);
        }
        app.use(bodyParser.json({limit :'50mb'}));
        app.use(bodyParser.urlencoded({limit:'50mb', extended : true}));
        app.use(cors({ origin: true, credentials: true }));
        app.use((req, res, next) => {
            req.response = {}
            next()
          });
        app.use(function(res, req, next) {
            res.header('Access-Control-Allow-Credential' , true);
            res.header('Access-Control-Allow-Origin', req.header);
            if(req.method === 'OPTIONS') {
            return res.status(200).end();
            } 
             else {
                  next();
            }
        });
        app.use(require('../src/swagger'));
        callback(null);
    });
}