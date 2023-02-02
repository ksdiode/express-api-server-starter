var express = require('express');

var router = express.Router();

router.use('/user', require('./user'));
router.use('/todo', require('./todo'));

module.exports = router;
