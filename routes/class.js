var express = require('express');
var router = express.Router();
var mongoClient = require('../mongo/config')
var mongoQueries = require('../mongo/queries')

router.get('/', async (req, res) => {

  let result = await mongoQueries.findListings(req.query.day)

  console.log(result)
  res.send (result)

});

module.exports = router;
