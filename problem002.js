function stringRotate(a, b) {
  var c = '';
  if(b>0){
    for(var i=0; i<b; i++){
    c = c + a[i];
    
    }
    a = a.substring(b, a.length-1);
    for(var i=0; i<b; i++){
      a = a + c[i];
    }
    return a;
  }
  return '';
}
