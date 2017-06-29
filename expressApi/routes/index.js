var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/hand-checker', (req, res)=>{
	var prop = 'hand[]';
	console.log(req.body[prop])
	res.json({msg: "You hit the express API!"})
})

module.exports = router;
