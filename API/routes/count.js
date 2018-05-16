const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');

/**
 * @type GET
 * @description GET top 15 hotel by
 */
router.get('/', (req, res, next) => {
	Hotel.find()
	// Select what values show
		.select()
		.exec()
		.then(docs => {
			const response = {
				count: docs.length,
			};
			res.status(200).json(response);
		}).catch(err => {
			console.log('\x1b[31m', '[Failure]', err);
			res.status(500).json(err);
	});
});

module.exports = router;