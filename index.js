var Hapi = require('hapi');
var server = new Hapi.Server();

//configure connection
server.connection({
  host: '0.0.0.0',
  port: 8080,
  routes: {cors: true} 
  //means its cool if someone wants to send ajax request from outside
});

//extends hapi with a plugin, which will take care of the routes for us
var plugins = [{ register: require('./routes/quotes.js') }]; 

//load the server with the plugins
server.register(plugins, function (err) {
  if (err) { throw err; } //checks for errors, or else start the server

//start the server
  server.start(function () {
    console.log('info', 'Server running at: ' + server.info.uri);
  });
});