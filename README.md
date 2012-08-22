# architect-express-resource

Allows other architect plugins to create resources through sub apps

## Config Format

```js
{
  "packagePath": "./node_modules/architect-express-resource",
  // This can be anything
  "viewEngine": require('eco')
}
```

## Usage

```js
module.exports = function (options, imports, register) {

  var resource = imports.resource;

  var app = resource(require('./pathToResource'), __dirname+'/views');

  imports.express.use(options.mount, app);
};
```

## TODO
- Tests
