const path = require('path');

const db = require(path.join(__dirname, "./db.js"));

module.exports.generate_uid = (length) => {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
    	let counter = 0;
    	while (counter < length) {
    		result += characters.charAt(Math.floor(Math.random() * charactersLength));
    		counter += 1;
   	}
    	return result;
}

module.exports.check_chat_status = (req, res, next) => {
	let id = req.params.chat_id;
	let q = `SELECT status FROM chats WHERE uid = '${id}'`;
	db.query(q, (err, results) => {
		if (err) throw err;

		if (results.length > 0) {
			if (results[0].status == 1) {
				next();
			} else {
				res.send('chat not active');
			}
		} else {
			res.send('chat does not exist');
		}
	})
}
