var express = require('express');
var countries = require('../data/countries');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({countries});
})

router.get('/:id', async function(req, res) {
  var id = req.params.id; 
  
  if (id == null){
      res.json({countries});
    }
    id=id.toLowerCase()
  // Retrieve the tag from our URL path
  
  var validCountries={}
    var obj = countries;
     var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var k=keys[i]
     
      if (countries[i].code.toLowerCase().includes(id)||countries[i].name.toLowerCase().includes(id)){
        validCountries[k] = countries[i];
      }
    }

  res.json({validCountries});
});

module.exports = router;