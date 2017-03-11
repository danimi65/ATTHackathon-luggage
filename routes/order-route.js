const server = require('../server');
const express = require('express');
const models = require('../models');


const app = express();
const router = express.Router();

router.route('/')
	.get((req, res) => {
		// res.render('index');
		res.send('sanity index');
});

//	Order Form
router.route('/new')
	.get((req, res) => {
		models.Order.findAll()
		.then(function(newOrder) {
			// res.render('order/new', {newOrder: newOrder});
			res.send('sanity new');
		});
});

//	Track Order
router.route('/status')
	.get((req, res) => {
		models.Order.findAll()
		.then(function(findOrder) {
			// res.render('order/track', {findOrder: findOrder});
			res.send('sanity status');
		});
});

//	Order Status
router.route('/:id')
	.get((req, res) => {
		models.Order.find({where: {
			id: req.params.id,
			drop_off: {
				$ne: null
			},
			pick_up: {
				$ne: null
			}
		}
		})
		.then(function(viewOrder) {
			// res.render('order/view', {viewOrder: viewOrder});
			res.send('sanity view order');
		})
		.catch(err => {
			console.log(err);
			res.send('Your order cannot be found or does not exist');
		});
});

module.exports = router;