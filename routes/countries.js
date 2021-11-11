var express = require('express');
var countries = require('../data/countries');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({countries});
});

module.exports = router;