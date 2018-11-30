const jwt = require('jsonwebtoken');
const keys = require('../../API/config/keys');

module.exports = (req, res, next) => {
	try {
		const decoded = jwt.verify(req.body.token, keys.JWT_SECRET);
		req.userData = decoded;
		next();
	} catch (e) {
		return res.status(401).json({
			message: 'Auth failed'
		});
	}
};