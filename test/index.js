
const express = require('express');
const app = express();
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
global.testServer;
global.mysso;
const httpRequest = require('../src/utils/HttpRequests');

chai.use(chaiHttp);
const getPort = require('get-port');
var dynamicPort;
(async () => {
    dynamicPort = await getPort();
})();

before((done) => {
    require('../app-utils/_initialize').initialize((app), (err) => {
        if (err) { throw err; }
        else {
            config = Object.assign({}, global.gConfig);
            require('../app-utils/_expressify').expressify((app), (err) => {
                if (err) { throw err; }
                else {
                    testServer = app.listen((dynamicPort || process.env.PORT || config.testServer.port), async () => {
                        console.log('Running on ports ' + (dynamicPort || process.env.PORT || config.testServer.port));

                        done();
                    });

                    testServer.timeout = 600000;
                }
            })
        }
    })
});

describe(' test Mocha and chai test API ', () => {
    test();
})

after(function () {
    // runs once after the last test in this block
    testServer.close(() => {
        console.log('Http server closed.');
        process.exit(0);
    });
});



function test() {
    require('./auto')();
    // require('./credit')()
    // require('./health')()
}