const express = require('express');
const router = express.Router();
const Hotel = require('../models/hotel');
const chalk = require('../chalk');

/**
 * @type GET
 * @description GET top 15 hotel by
 */
router.get('/', (req, res, next) => {
	Hotel.find().select()
		.exec()
		.then(docs => {
			const response = {
				count: docs.length,
			};
			res.status(200).json(response);
			console.log(chalk.success('[Success get data /count]'));
		}).catch(err => {
			console.log(chalk.error('[Failure]', err));
			res.status(500).json(err);
	});
});

module.exports = router;