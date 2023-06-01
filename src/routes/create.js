const path = require('path');
const express = require('express');

const router = express.Router();
const db = require(path.join(__dirname, "../tools/db.js"));
const utils = require(path.join(__dirname, "../tools/utils.js"));

router.get('/', (req, res) => {
	res.render('create.hbs');
})

router.post('/', (req, res) => {
	let name = req.body.name;
	let password = req.body.password;
	let uid = utils.generate_uid(5);
	
	let q = `INSERT INTO chats VALUES (default, '${name}', '${password}', '', 1, '${uid}')`;
	db.query(q, (err, results) => {
		if (err) throw err;

		res.send({ status: true, uid: uid });
	})
})

module.exports = router;
