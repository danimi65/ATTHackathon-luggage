const express = require('express');
const bp = require('body-parser');
const handlebars = require('express-handlebars');
const app = express();
const methodOverride = require('method-override');
app.use(express.static('public'));
const hbs = handlebars.create({
  extname: '.hbs',
  layoutDir: 'app'
});
const db = require('./models');
const order = require('./routes/order-route');
const {Order} = db;
const confirmationPage = require('./views/confirmationPage');
const form = require('./views/form');

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(methodOverride('_method'));
app.use(bp.urlencoded({extended: true}));


app.use('/', order);
app.use('/confirmationPage', order);
app.use('/form', form);

// app.get('/', (req, res)=>{
//   console.log('hello world');
//   res.render('form');
// });

app.listen(3000, function() {
	console.log('Server listening on port 3000');
	db.sequelize.sync();
});

module.exports = app;