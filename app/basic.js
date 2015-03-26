var requestify = require('requestify');

module.exports.sendMessage = function(text,to){
		var payload = {};
		if(!to){
			payload.channel = to;
		}
		//payload.channel ='@vincentbouillart';
		payload.text = text;

		requestify.post('https://hooks.slack.com/services/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', payload);	
}
module.exports.validRequest = function(token){
	if(token === '5i0Yz2sc5OfXUgwAEJyMtnlM'){
		return true;
	}else {
		return false;
	}
}

