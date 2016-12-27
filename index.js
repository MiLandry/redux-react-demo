import expect from 'expect';

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

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT' :
    return state + 1;
    case 'DECREMENT': return state -1;
    default:
    return state;
  }
}


expect(counter(0, { type: 'INCREMENT' } )).toEqual(1);