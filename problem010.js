function deepCopy(a) {
  var i, copy;

    if( Array.isArray( a ) ) {
        copy = a.slice( 0 );
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = deepCopy( copy[ i ] );
        }
        return copy;
    } else {
        return a;
    }
}
