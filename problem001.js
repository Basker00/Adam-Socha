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
