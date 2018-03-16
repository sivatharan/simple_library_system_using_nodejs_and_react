/**
 * @author A.Sivatharan
 * created on 14.03.2018
 */
/*common function here*/
var app = require('./app');
exports.isInt = function(n){
    return Number(n) === n && n % 1 === 0;
}

exports.isFloat   = function(n){
	// console.info('----',n);
	n = parseFloat(n);
    return Number(n) === n && n % 1 !== 0;
}

exports.isString = function(s){
	if(s.length == 0) return false;
	return typeof s === 'string' || s instanceof String;
}

exports.getDate = function(dt){

	var year = dt.getFullYear();
	var month = dt.getMonth() + 1;
	if(month <= 9) month = '0'+month;

	var day= dt.getDate();
	if(day <= 9) day = '0'+day;

	var prettyDate = year +'-'+ month +'-'+ day;
	return prettyDate;
	
}

exports.getTime = function(dt){
	var h = (dt.getHours()<10?'0':'') + dt.getHours(),
        m = (dt.getMinutes()<10?'0':'') + dt.getMinutes();
	return h + ':' + m;
}

exports.makeid = function(n) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < n; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

exports.isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

exports.isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};

exports.contentType = function(req){
	console.info(req.get('Content-Type'));
	if(req.get('Content-Type') == 'application/json') return 'json';
	else if(req.get('Content-Type') ==  'application/x-www-form-urlencoded')  return 'urlencoded';
	else return 'others'
};

exports.checkValidJson = function(str){
	try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

/* validate JWT token */
exports.veryfyJWTToken = function(req,res,next){
	var token = req.headers['token'];
	jwt.verify(token, globalJs.jwt.secret, function(err, decoded) {
		console.info(err);
		if (err) return res.status(500).json({ status: false, message:"faild", result: 'failed to authenticate token.' });
		next();

	})
}
exports.veryfyJWTToken = function(req,res,next){
	var token = req.headers['token'];
	jwt.verify(token, globalJs.jwt.secret, function(err, decoded) {
		console.info(err);
		if (err) return res.status(500).json({ status: false, message:"faild", result: 'failed to authenticate token.' });
		next();

	})
}

exports.getAddedDate = function(year){
	var dt = new Date();
	var year = dt.getFullYear() + year;
	var month = dt.getMonth() + 1;
	if(month <= 9) month = '0'+month;

	var day= dt.getDate();
	if(day <= 9) day = '0'+day;

	var prettyDate = year +'-'+ month +'-'+ day;
	return prettyDate;
	
}

exports.getMinusDate = function(year){
	var dt = new Date();
	var year = dt.getFullYear() - year;
	var month = dt.getMonth() + 1;
	if(month <= 9) month = '0'+month;

	var day= dt.getDate();
	if(day <= 9) day = '0'+day;

	var prettyDate = year +'-'+ month +'-'+ day;
	return prettyDate;
	
}