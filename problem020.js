function Square(a){
  this.a = a;
}
Square.prototype.getArea = function (){
  return this.a*this.a;
}
Square.prototype.getPerimeter = function (){
  return this.a*4;
}
