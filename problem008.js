function magicSequence(a){
  if(a==1){
    return -1;
  }else if(a==2){
    return -2;
  }else if(a==3){
    return -2;
  }else return magicSequence(a - 1) * (a - 3);
  
}

var n=0;

n = parseInt(prompt("Podaj nr wyrazu ciągu, którego wartość chcesz policzyć: "));

console.log("Wartość w podanym elemencie ciągu wynosi: " + magicSequence(n));
