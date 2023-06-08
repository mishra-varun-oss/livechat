const path = require('path');
const ws = require('ws');

const wss = new ws.Server({ noServer: true });

wss.on('connection', (ws) => {
	console.log('connected!');
})

module.exports = wss;
