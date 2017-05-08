require('babel-polyfill');
require('babel-register')(
  {
    //testing requires node_modules be converted to ES5,
    // Ignore can also be specified as a function.
    ignore: function(filename) {
      if (filename.includes() === "/es") {
        return false;
      } else {
        return true;
      }
    },

  }
);

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

var documentRef = document;
