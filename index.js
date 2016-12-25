document.write("hello webpack mike");
window.decrement = function () {
  var value = document.getElementById("theValue").innerHTML;
  console.log(value);
  value -- ;
  document.getElementById("theValue").innerHTML = value

}


window.increment = function increment () {
  var value = document.getElementById("theValue").innerHTML;
  console.log(value);
  value ++ ;
  document.getElementById("theValue").innerHTML = value

}
