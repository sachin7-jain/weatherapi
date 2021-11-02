const express = require('express');
const router = express.Router();
const health  = require('../controllers/health');

router.get('*' , (req, res, next) => {
    health.get(req).then((response) => {
        req.response = response;
        next();
    }).catch((error) => {
        next(err);
    })
})

module.exports = router;