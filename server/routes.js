/**
 * @author A.Sivatharan
 * created on 14.03.2018
 */
'use strict';
module.exports = function(app) {

	app.all('/api/book/*',[require('./config/validateRequest')]); // all auth validation

	app.use('/api/book', require('./api/book'));
	
	app.get('*', function(req, res){
	  	res.status(404).json({status: false, message: "faild", result: 'Please check your method or url'});
	});
	
	app.post('*', function(req, res){
	 	res.status(404).json({status: false, message: "faild", result: 'Please check your method or url'});
	});
}
