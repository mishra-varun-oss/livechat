const path = require('path');
const express = require('express');
const body_parser = require('body-parser');

const app = express();
const port = 3002;

const public_directory = path.join(__dirname, "../public");
const views_directory = path.join(__dirname, "../templates/views");

const index = require(path.join(__dirname, "./routes/index.js"));
const create = require(path.join(__dirname, "./routes/create.js"));

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
app.use(express.static(public_directory));
app.set("view engine", ".hbs");
app.set("views", views_directory);

app.use('/', index);
app.use('/create', create);

app.listen(port, () => {
	console.log(`laalwood.com is running on port ${port}`);
})
