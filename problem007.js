function findMax(){
  var max=arguments[1];
  for(var i in arguments){
    if(max<arguments[i]){
      max=arguments[i];
    }
  }
  return max;
}

console.log(findMax(5, 3, 5, 6, 15, 12, 3));
