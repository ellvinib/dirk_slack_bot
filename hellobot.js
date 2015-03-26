var basic = require('./app/basic');

module.exports = function (req, res, next) {
  var text = req.body.text;
  var command = req.body.command;
  var userName = req.body.user_name;
  var userId = req.body.user_id;
  var channelName = req.body.channel_name;
  var token = req.body.token;

  var words = text.match(/\w+|"[^"]+"/g);
  var action = words[0];

  if(basic.validRequest(token)){
  	if(action === 'message'){
  		var message = words[2].replace(/^"?(.+?)"?$/,'$1');
  		var to = words[1];
  		return res.status(200).json({text:to,message:message});
  	  	basic.sendMessage(message,to);
  	}else{
  		return res.status(200).json({text:'The command didn\'t exist !'});
  	}
  	return res.status(200);
  }else{
  	return res.status(404).end();
  }
  
}

