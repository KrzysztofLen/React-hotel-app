const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

// Storage image file
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/');
	},
	filename: function(req, files, cb) {
		cb(null, new Date().toISOString().replace(/:/g, '-') + files.originalname);
	}
});

const upload = multer({storage: storage});
// const upload = multer({ dest: 'uploads/'});

const Product = require('../models/product');

/**
 * Method GET
 * Get all products from DB
 */
router.get("/", (req, res, next) => {
	Product.find()
	// Select which property show
		.select('name price _id productImage')
		.exec().then(docs => {
		// Show length of objects
		const response = {
			count: docs.length,
			products: docs.map(doc => {
				return {
					name: doc.name,
					price: doc.price,
					productImage: doc.productImage,
					_id: doc._id
				}
			})
		};
		res.status(200).json(response);
	}).catch(err => {
		console.log(err);
		res.status(500).json(err);
	});
});

/**
 * Method POST
 * Send new product object to DB
 */
router.post("/", upload.array('productImage'),(req, res, next) => {
	// console.log(req.files[0].path);
	const filesTest = [];
	req.files.forEach(file => {
		filesTest.push(file.path);
	});

	console.log(filesTest);

	// Object values
	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price,
		productImage: filesTest
	});
	// Save product
	product.save().then(result => {
		console.log(result);
		res.status(201).json({
			message: "Handling POST request tp /products",
			// Sending product schema
			createdProduct: {
				name: result.name,
				price: result.price,
				_id: result._id,
				productImage: result.productImage
			}
		});
	}).catch(err => {
		res.status(500).json({
			error: err
		});
	});
});

router.get("/:productId", (req, res, next) => {
	const id = req.params.productId;
	Product.findById(id)
	// Select which property show
		.select('name price _id').exec().then(doc => {
		console.log(doc);
		if (doc) {
			res.status(200).json(doc);
		} else {
			res.status(404).json({
				message: "No valid entry found for provided ID"
			});
		}
	}).catch(err => {
		console.log(err);
		res.status(500).json({error: err});
	});
});

router.patch("/:productId", (req, res, next) => {
	const id = req.params.productId;
	const updateOps = {};
	for (const ops of req.body) {
		updateOps[ops.propName] = ops.value;
	}
	Product.update({_id: id}, {$set: updateOps}).exec().then(result => {
		console.log(result);
		res.status(200).json({
			result
		});
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			error: error
		});
	});
});

router.delete("/:productId", (req, res, next) => {
	const id = req.params.productId;
	Product.remove({
		_id: id
	}).exec().then(result => {
		res.status(200).json(result);
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
});

module.exports = router;
