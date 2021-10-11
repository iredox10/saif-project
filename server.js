// dependencies
const express = require('express');
const app = require('express')();
const ejs = require('ejs');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const methodOverride = require('method-override');
require('dotenv').config()
// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(routes);

// connect to mongo database
mongoose
	.connect(process.env.DBS_URL || 'mongodb://localhost/saif-project')
	.then((result) => app.listen(process.env.PORT || 4000))
	.catch((err) => console.log(err));
