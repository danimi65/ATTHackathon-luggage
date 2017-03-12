const server = require('../server');
const express = require('express');
const models = require('../models');
const db = require('../models');
const {Order} = db;



// const app = express();
const router = express.Router();

router.route('/')
	.get((req, res) => {
		// res.render('index');
		res.render('index');
});

//	Order Form
router.route('/form')
	.get((req, res) => {
		// models.Order.findAll()
		// .then(function(newOrder) {
		// 	res.render('form', {newOrder: newOrder});
			res.render('./form');
			// res.send('sanity new');
		// });
})
	.post((req, res) =>{
	console.log(req.body);
	Order.create({
		first_name: req.body.first_name,
		last_name: req.body.last_name,
		billing_address: req.body.billing_address,
		phone_number: req.body.phone_number,
		email: req.body.email,
		drop_off: req.body.drop_off,
		pick_up: req.body.pick_up,
		luggage: req.body.luggage,
		route: req.body.route,
		hotel: req.body.hotel
	})
	.then((orders) =>{
		res.redirect(303, 'confirmationPage');
	})
	.catch(err=>{
		console.log('post error', err);
	});
});
	


//	Track Order
router.route('/status')
	.get((req, res) => {
		models.Order.findAll()
		.then(function(findOrder) {
			res.render('status', {findOrder: findOrder});
			// res.send('sanity status');
		});
});

//	Order Status
// router.route('/:id')
// 	.get((req, res) => {
// 		models.Order.find({where: {
// 			id: req.params.id,
// 			$and: {
// 					drop_off: {
// 					$ne: null
// 				},
// 				pick_up: {
// 					$ne: null
// 				}
// 			}
// 		}

// 		})
// 		.then(function(viewOrder) {
// 			res.render('guest-order', {viewOrder: viewOrder});
// 			// res.send('sanity view order');
// 		})
// 		.catch(err => {
// 			console.log(err);
// 			res.send('Your order cannot be found or does not exist');
// 		});

// 	});


// 	//Form Page
// 	router.route('/form')
// 	.get((req, res) =>
// 		res.render('form');
// 	});

module.exports = router;