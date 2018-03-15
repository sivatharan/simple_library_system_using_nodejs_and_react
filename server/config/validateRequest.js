var jwt = require('jsonwebtoken');


module.exports = function(req, res, next) {
	//auth function here
	// if(err) return res.status(400).json({status: false, message: "failed", result:'somthing went wrong'}); 
    next(); // 
};


