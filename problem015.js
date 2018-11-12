var stos = [];
var Stack = {
  push: function (a,b){
    
    if(b==null){
      b=1;
    }
    console.log("b =" + b);
    stos[b-1]=null;
    stos[0]=1;
    
    return stos.push(a);
  },
  pop: function (a,b){
    if(a==null){
      a=1;
    }
    
    return stos.pop(a);
  }
}
