// Middleware check if user exist
module.exports = (req, res, next) => {
	if(!req.user) {
		return res.status(401).send({
			message: 'You must login!'
		});
	}

	next();
};