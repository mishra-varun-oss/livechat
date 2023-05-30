const path = require('path');
const mysql = require('mysql');
require('dotenv').config({ path: path.join(__dirname, "../../cred.env") });

const connection = mysql.createConnection({ 
	host: 'localhost',
	user: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
})

connection.connect((error) => {
	if (error) {
		console.error(`Error: ${error}`);
		return;
	}
	console.log('laalwood.com is connected to MySQL!');
})

module.exports = connection;
