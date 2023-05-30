const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.render('create.hbs');
})

module.exports = router;
