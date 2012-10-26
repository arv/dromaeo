var startTest = top.startTest || function(){};
var test = top.test || function(name, fn){ fn(); };
var endTest = top.endTest || function(){};
var prep = top.prep || function(fn){ fn(); };

// Inject Polyfills if needed.
if (/polyfill/.test(top.location.hash)) {
  var scripts = document.querySelectorAll('script[src]');
  var src = scripts[scripts.length - 1].src;
  var basePath = src.replace(/\/[^\/]*$/, '/');
  var polyfillPath = basePath + '../polyfills/ShadowDOM/';
  [
    'map.js',
    'sidetable.js',
    'domreflectionutils.js',
    'domoverrides.js',
    'paralleltrees.js',
    'ShadowRoot.js'
  ].forEach(function(filename) {
    document.write('<script src="' + polyfillPath + filename + '"></script>');
  });
}