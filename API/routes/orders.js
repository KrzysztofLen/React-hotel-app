const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Product = require('../models/product');

/**
 * Method GET all orders from DB
 */
router.get("/", (req, res, next) => {
	Order.find().select('product quantity _id').exec().then(docs => {
		console.log('\x1b[36m%s\x1b[0m', '[Success]', docs);
		const response = {
			count: docs.length,
			orders: docs
		};
		res.status(200).json(response);
	}).catch(err => {
		console.log('\x1b[31m', '[Failure]', err);
		res.status(500).json({
			error: err
		});
	});
});

/**
 * Method POST send new order to DB
 */
router.post("/", (req, res, next) => {
	Product.findById(req.body.productId)
		.then(product => {
			// Is it necessery? Check if product id exist
			// if (!product) {
			// 	return res.status(404).json({
			// 		message: "Product not found"
			// 	});
			// }
			const order = new Order({
				_id: new mongoose.Types.ObjectId(),
				quantity: req.body.quantity,
				product: req.body.productId
			});
			return order.save();
		}).then(result => {
		console.log('\x1b[36m%s\x1b[0m', '[Success]', result);
		res.status(201).json(result);
	}).catch(err => {
		res.status(500).json({
			error: err
		});
	});
});

/**
 * Method GET
 * Get one order by ID
 */
router.get("/:orderId", (req, res, next) => {
	// Find order by ID and display message
	Order.findById(req.params.orderId).exec().then(order => {
		if(!order) {
			return res.status(404).json({
				message: 'Order not found'
			});
		}
		res.status(200).json({
			message: "Order details",
			order: order
		});
	}).catch(err => {
		console.log('\x1b[31m', '[Failure]', err);
		// Check if order ID exist
		if(err.reason === undefined) {
			return res.status(404).json({
				message: 'Order not found'
			});
		}
		res.status(500).json({
			error: err
		});
	});
});

/**
 * Method DELETE
 * delete order by ID
 */
router.delete("/:orderId", (req, res, next) => {
	Order.remove({_id: req.params.orderId}).exec().then(result => {
		res.status(200).json({
			message: "Order deleted"
		});
	}).catch(err => {
		console.log('\x1b[31m', '[Failure]', err);
		res.status(500).json({
			error: err
		});
	});
});

module.exports = router;
