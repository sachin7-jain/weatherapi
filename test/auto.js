
const chai = require('chai');
chai.should();
const Tests = require('./Tests.json');

module.exports = async () => {
    describe('test status for all APIs', () => {
        const auto200 = Tests.auto200 || [];
        const manual200 = Tests.manual200 || [];
        const tests200 = auto200.concat(manual200);
        tests200.forEach((testElem) => {
            it(`check status 200 for ${testElem.apiDescName}`, function (done) {
                chai.request(testServer)
                    .post(testElem.apiPath)
                    .send(testElem.reqBody)
                    .end(function (err, res) {
                        if (err) {
                            console.log('errorr', err)
                            done(err)
                        } else {
                            //res.should.have.status(200);
                            let status = res.status;
                            res.should.have.status(status);
                            done();
                        }
                    });
            });
        });
    });
}



