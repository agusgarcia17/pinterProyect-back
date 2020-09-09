var express = require('express');
var router = express.Router();
var cors = require('cors')

router.use(cors())

const CardController = require("../controllers/CardController")
const CardService = require("../services/CardService") 
const CardInstance = new CardController(new CardService())


router.get('/api/ping', (req, res, next) => {
  return res.send('PONG');
});


router.get('/api/card/:id', (req, res) => {
  return CardInstance.getById(req, res);
} )

router.get('/api/card', (req, res) => {
  return CardInstance.get(req, res);
} )
 

router.post('/api/card', (req, res) => {
  return CardInstance.add(req, res);
} )


module.exports = router;
