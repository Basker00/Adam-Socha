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

var b=0;
var a="";
a=prompt("Podaj dowolny łańcuch tekstowy: ")
b=parseInt(prompt("Podaj wartość przesunięcia: "));

console.log('Twój nowy łańcuch tekstowy: ' + stringRotate(a, b));
