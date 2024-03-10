var a=[1,2,3,4,5,6,7,8,9,10];
var b=[];

for( var i=0; i < a.length; i++) {
  if(a[i] % 2 === 0) {
    b.push(a[i])
    
  }
}

var t=('Начальные цыфры')
var u=('Цыфры которые делятся на 2')

alert(t)
alert(a)
alert(u)
alert(b.join(","));
