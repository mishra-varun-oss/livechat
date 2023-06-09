const path = require('path');
const express = require('express');

const router = express.Router();

const utils = require(path.join(__dirname, "../tools/utils.js"));
const db = require(path.join(__dirname, "../tools/db.js"));

router.get('/', (req, res) => {
	res.render('index.hbs');
})

router.post('/', (req, res) => {
	let password = req.body.password;
	let uid = utils.generate_uid(5);
	
	let q = `INSERT INTO chats VALUES (default, '${password}', 1, '${uid}')`;
	db.query(q, (err, results) => {
		if (err) throw err;

		res.send({ status: true, uid: uid });
	})
})

module.exports = router;
