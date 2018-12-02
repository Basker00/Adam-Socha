function carry(a, ...args){
  var b = a.length;
  if(args.length === b){
    var wynik = a(...args);
    return wynik;
  }
  else{
    return function(...moreArgs){
      args = args.concat(moreArgs);
      return carry(a,...args)
    }
  }
}
