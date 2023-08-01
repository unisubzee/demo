var restify = require('restify');

var version = '1.0.0';
const commitID = '__COMMIT_ID__';

function respond(req, res, next) {
  res.send('hello ' + version + + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
  console.log('Version: ' + version);
  console.log('Commit ID: ' + commitID);
});
