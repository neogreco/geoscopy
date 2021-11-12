var express = require('express');
var countries = require('../data/countries');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({countries});
})

router.get('/q/:id', async function(req, res) {
    
  // Retrieve the tag from our URL path
  var id = req.params.id;
  var validCountries={}
    var obj = countries;
     var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var k=keys[i]
     
      if (i==0){
      console.log(id)
      console.log(obj[k])
      console.log(k)
      console.log(obj[k].AF)
      console.log(obj[k].value)
    }
      
      if (JSON.stringify(obj[k]).includes(id)){
        console.log("Match found! at"+i)
        validCountries[k]=obj[k];
      }
    }

  res.json({validCountries});
});

module.exports = router;