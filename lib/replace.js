module.exports = function(opts) {
  if(!opts){
    throw new Error("Always requires argment");
  }
  if(!opts["before"] || !opts["after"] ){
    throw new Error('Be sure to have "before" and "after" object names');
  }
  if(!Array.isArray(opts["before"]) || !Array.isArray(opts["after"]) ){
    throw new Error('Objects "before" and "after" must be of type Array');
  }
  if(opts["before"].length != opts["after"].length || opts["before"].length == 0){
    throw new Error("Array length is 1 or more");
  }
  return function(css, result) {
    css.walkRules(function transformRules(rule) {
      for(var i = 0; i < opts["before"].length; i += 1){
        var regex = new RegExp(opts["before"][i], 'g');
        rule.selector = rule.selector.replace(regex, opts["after"][i]);
      }
    });
  }
};
