import redux from 'redux';
console.log(redux);

function decrement () {
  var value = document.getElementById("theValue").innerHTML;
  console.log(value);
  value -- ;
  document.getElementById("theValue").innerHTML = value

}


function increment () {
  var value = document.getElementById("theValue").innerHTML;
  console.log(value);
  value ++ ;
  document.getElementById("theValue").innerHTML = value

}