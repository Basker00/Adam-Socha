function deepFindAndCount(a,b) {
var c=0;
for (var i=0; i<=a.length; i++) {
if(typeof a[i]=='object') {
c+=deepFindAndCount(a[i],b);
} else {
if (a[i]==b) c++;
}
}
return c;
}
