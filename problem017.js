function compose(){
  var tab = Array.prototype.slice.call(arguments);
  return function(x) {
    while(tab.length > 0) {
      x = tab.pop()(x)
    }
    return x;
  };
}
