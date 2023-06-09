const path = require('path');
const express = require('express');
const body_parser = require('body-parser');
require('dotenv').config({ path: path.join(__dirname, "../cred.env") });

const app = express();
const port = process.env.PORT;

const public_directory = path.join(__dirname, "../public");
const views_directory = path.join(__dirname, "../templates/views");

const index = require(path.join(__dirname, "./routes/index.js"));
const chat = require(path.join(__dirname, "./routes/chat.js"));

const wsServer = require(path.join(__dirname, "./websocket.js"));

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(express.static(public_directory));
app.set("view engine", ".hbs");
app.set("views", views_directory);

app.use('/', index);
app.use('/chat', chat);

const server = app.listen(port);
server.on('upgrade', (request, socket, head) => {
	if (request.url === '/chat') {
		wsServer.handleUpgrade(request, socket, head, (ws) => {
			wsServer.emit('connection', ws, request);
		})
	} else {
		socket.destroy();
	}
})
