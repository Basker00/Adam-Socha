var Vectors = {
  
  sum: function(a,b){
    var wynik = [];
    if(a.length==b.length){
      for(var i = 0; i<a.length; i++){
        wynik[i] = a[i]+b[i];
      }
      return wynik;
    }else return false;
  },
  mulByScalar: function(a,b){ 
  var wynik=[];
  if(typeof b== "number" && a!=""){
    for(var i = 0; i<a.length; i++){
        wynik[i] = a[i]*b;
      }
      return wynik;
    }else return false;
  }
}
