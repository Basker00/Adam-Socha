function triangleArea(a, b, c){
  if(a>0 && b>0 && c>0)
    {
      var p = (a+b+c)/2;
      var wynik=0;
      wynik = p*(p-a)*(p-b)*(p-c);
      console.log(Math.sqrt(wynik));
      return 0;
    }
  return -1;
  
}

var a=0;
var b=0;
var c=0;
a=parseInt(prompt("Podaj bok a:"));
b=parseInt(prompt("Podaj bok b:"));
c=parseInt(prompt("Podaj bok c:"));

triangleArea(a, b, c);
