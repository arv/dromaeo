var startTest = top.startTest || function(){};
var test = top.test || function(name, fn){ fn(); };
var endTest = top.endTest || function(){};
var prep = top.prep || function(fn){ fn(); };

// We need to manually wrap document for the polyfill. If the polyfill is not
// present this is just the identity function.
function wrap(obj) {
  return obj;
}

// Inject Polyfills if needed.
if (/polyfill/.test(top.location.hash)) {
  var scripts = document.querySelectorAll('script[src]');
  var src = scripts[scripts.length - 1].src;
  var basePath = src.replace(/\/[^\/]*$/, '/');
  var polyfillPath = basePath + '../bower_components/ShadowDOM/shadowdom.js'
  document.write('<script src="' + polyfillPath + '"></script>');

  wrap = function(obj) {
    return ShadowDOMPolyfill.wrap(obj);
  };
}
