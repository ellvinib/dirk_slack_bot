var basic = require('./app/basic');
var voting = require('./app/vote/index');

module.exports = function (req, res, next) {
  var text = req.body.text;
  var command = req.body.command;
  var userName = req.body.user_name;
  var userId = req.body.user_id;
  var channelName = req.body.channel_name;
  var token = req.body.token;

  var words = text.match(/"[^"]+"|(\S+)/g);
  var action = words[0];

  if(basic.validRequest(token)){
  	
  	/*if(action === 'message'){
  		if(words.length === 3){
	  		var message = words[2].replace(/^"?(.+?)"?$/,'$1');
	  		var to = words[1];
	  	  	basic.sendMessage(message,to);
  		}else{
  			return res.status(200).send('Wrong use of args ! /dirk message TO "text"');
  		}
  	}else if(action === 'vote'){
  		voting(req,res,next);
  	}else{
  		return res.status(200).send('The command didn\'t exist !');
  	}*/
  	return res.status(200);
  }else{
  	return res.status(404).end();
  }
  
}

