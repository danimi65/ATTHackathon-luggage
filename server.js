const express = require('express');
const bp = require('body-parser');
const app = express();
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const hbs = handlebars.create({
	extname: '.hbs',
	defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use(methodOverride('_method'));

const order = require('./routes/order-route');

const db = require('./models');
const {Order} = db;

app.use('/order', order);

app.listen(3000, function() {
	console.log('Server listening on port 3000');
	db.sequelize.sync();
});

module.exports = app;