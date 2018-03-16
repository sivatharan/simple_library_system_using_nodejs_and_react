/**
 * @author A.Sivatharan
 * created on 14.03.2018
 */

exports.getBookList = function (req, res, next) {
	// req.checkBody('username', 'Invalid username').notEmpty().withMessage("username can not be empty");
	// req.checkBody('password', 'Invalid password').notEmpty().withMessage("password can not be empty");

	// user.validateLoginBody(req);
	// var reqBodyResult = appFun.reqBodyValidation(req, res);
	// if(reqBodyResult != null)  return res.status(400).json({status: false, message: "failed", result: reqBodyResult});
	 mysqlDB.getConnection(function(err, connection) {
		connection.query('select * from book', function (error, results, fields) {
		  	connection.release();
		  	if (error) return res.status(400).json({status: false, message: "failed", result:error});
		  	res.status(200).json({status: true, message: "Success", result: results});
		});
	})
}

exports.addBook = function (req, res, next) {

	req.checkBody('title', 'Invalid title').notEmpty().withMessage("title can not be empty");

	var errors = req.validationErrors();

	if (errors) return res.status(400).json({status: false, message: "faild", result: errors});

	mysqlDB.getConnection(function(err, connection) {
		connection.query('call addBook("'+makeid()+'","'+ req.body.title+'")', function (error, results, fields) {
		  	connection.release();
		  	if (error) return res.status(400).json({status: false, message: "failed", result:error});
		  	res.status(200).json({status: true, message: "Success", result: results[0][0]});
		});
	})
}

exports.deleteBook = function (req, res, next) {
	
	mysqlDB.getConnection(function(err, connection) {
		connection.query('delete from book where id='+req.body.id, function (error, results, fields) {
		  	connection.release();
		  	if (error) return res.status(400).json({status: false, message: "failed", result:error});
		  	res.status(200).json({status: true, message: "Success", result: results});
		});
	})
}






function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}