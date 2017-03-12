const server = require('../server');
const express = require('express');
const models = require('../models');


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
router.route('/:id')
	.get((req, res) => {
		models.Order.find({where: {
			id: req.params.id,
			$and: {
					drop_off: {
					$ne: null
				},
				pick_up: {
					$ne: null
				}
			}
		}

		})
		.then(function(viewOrder) {
			// res.render('order/view', {viewOrduer: viewOrder});
			res.send('sanity view order');
		})
		.catch(err => {
			console.log(err);
			res.send('Your order cannot be found or does not exist');
		});

	});


// 	//Form Page
// 	router.route('/form')
// 	.get((req, res) =>
// 		res.render('form');
// 	});

module.exports = router;