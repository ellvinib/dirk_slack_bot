module.exports = function(req, res, next){
	var text = req.body.text;
	var words = text.match(/(\[.*?\])|("[^"]+"|(\S+))/g);

	if(words[1] === "question"){
		//question
		JSON.parse(words[3]);
		return res.status(200).json(JSON.parse(words[3]));
	}else if(!isNaN(parseInt(words[1]))){

	}else{
		return res.status(200).send('The vote arguments are question OR number ID of the question');
	}	


}

/*
/dirk vote question "who is the best" ["vincent is cool ","bert ?","tom ?"]
*/