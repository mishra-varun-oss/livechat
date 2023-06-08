const path = require('path');
const express = require('express');

const router = express.Router();

const utils = require(path.join(__dirname, "../tools/utils.js"));
const db = require(path.join(__dirname, "../tools/db.js"));

router.get('/:chat_id', utils.check_chat_status, (req, res) => {
	res.render("chat.hbs");
})

module.exports = router;
