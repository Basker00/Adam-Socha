function maybe(a, b, c){
  if(a(c)){
    return console.log(b(c));
  }else return console.log(c);
}
