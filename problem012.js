function objectsDiff(a, b){
  var w = Object.keys(a);
  var z = Object.keys(b);
  var c = [];
  var x=false;
  if(w!=[]&&b!=[]){
    for(var i=0; i<w.length;i++){
      x=false;
      for(var j=0; j<w.length;j++){
        if(w[i]==z[j]){
          x=true;
        }
      }
      if(x==false){
        c=c.concat(w[i]);
      }
    }
    for(var i=0; i<z.length;i++){
      x=false;
      for(var j=0; j<z.length;j++){
        if(z[i]==w[j]){
          x=true;
        }
      }
      if(x==false){
        c=c.concat(z[i]);
      }
    }
    return c;
  }else return false;
}
