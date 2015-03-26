var basic = require('./app/basic');

module.exports = function (req, res, next) {
  var text = req.body.text;
  var command = req.body.command;
  var userName = req.body.user_name;
  var userId = req.body.user_id;
  var channelName = req.body.channel_name;
  var token = req.body.token;

  var words = text.split(' ');
  var action = words[0];

  if(basic.validRequest(token)){
  	if(action === 'prive'){
  		basic.sendMessage(words[2],'@'+words[1]);
  	}  	
  	return res.status(200);
  }else{
  	return res.status(404).end();
  }
  
}

