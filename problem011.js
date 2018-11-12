function deepFindAndCount(a, b){
  var c=0;
  const tab = a.map(function(el) {
    if(el==b){c++;}
});
  return c;
}
