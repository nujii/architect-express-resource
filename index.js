module.exports = function(options, imports, register) {
  var express = require('express');
  var expressResource = require('express-resource');
  
  register(null, {
    resource: function(resource, viewDir){

      var app = express.createServer();

      if (viewDir) {
        app.register('html', options.viewEngine||require('ejs'));

        app.set('views', viewDir);
        app.set('view options', { layout: options.layout||false });
        app.set('view engine', 'html');
      }
      app.resource(resource);
      return app;
    }
  });
};
