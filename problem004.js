function getTotalNumberOfNewYaersEveSundays(a, b){
  var x=0;
  for(var i=a-1; i<=b-1; i++){
    var sunday=0;
    sunday = 1+26+8+i+(Math.floor(i/4))-(Math.floor(i/100))+(Math.floor(i/400))+2;
    if(sunday % 7 == 1) x++;
  }
  return x;
}
