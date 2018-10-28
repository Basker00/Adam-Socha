function strangeSum(a, b){
  if(!Number.isInteger(a)||!Number.isInteger(b)){
    return null;
  }else if(a==b){
    return (a+b)*3;
  }else return a+b;
}
