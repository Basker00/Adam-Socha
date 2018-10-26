function strangeSum(a, b){
  if(isNaN(a)||isNaN(b)){
    return null;
  }
  if(a==b && (!isNaN(a)||!isNaN(b))){
    return (a+b)*3;
  }else if(a!=b && (!isNaN(a)||!isNaN(b)))
  {
    return a+b;
  }
  
}
var a=parseInt(prompt("Podaj liczbę a: "));
var b=parseInt(prompt("Podaj liczbę b: "));

console.log(strangeSum(a,b));
