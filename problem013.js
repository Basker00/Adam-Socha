function parametricSort(a, b){
  if(b=="asc"){
    Array.prototype.sortNum = function() {
    return this.sort( function (a,b) { return a-b; } );
    }
    a.sortNum();
  }else if(b=="desc"){
    Array.prototype.sortNum = function() {
    return this.sort( function (a,b) { return a-b; } );
    }
    a.sortNum();
    a.reverse();
  }else return false;
  return a;
}
