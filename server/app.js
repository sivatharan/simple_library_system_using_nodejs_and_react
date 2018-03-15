/**
 * @author A.Sivatharan
 * created on 14.03.2018
 */
global.express = require('express');
global.app = express();
global.request =  require('request');
global.globalJs = require('./config/globals');
global.env = require('./config/env');
global.util = require('util');
global.appFunc = require('./config/app');
global.mysqlDB = require('./config/database');
global.jwt = require('jsonwebtoken');


require('./config/express')(app);
require('./routes')(app);

app.listen(env.PORT,function(){
	console.info(' server is running on '+env.PORT);
});
