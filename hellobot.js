var requestify = require('requestify');

module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  
  if (userName !== 'slackbot') {
    requestify.post('https://hooks.slack.com/services/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', {
      text : 'Hello, ' + userName + '!'
    })
  }
 
  // avoid infinite loop
  if (userName !== 'slackbot') {
    return res.status(200);
  } else {
    return res.status(200).end();
  }
}