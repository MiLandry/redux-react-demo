import expect from 'expect';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT' :
    return state + 1;
    case 'DECREMENT': return state -1;
    default:
    return state;
  }
}

import { createStore } from 'redux';
const store = createStore(counter);

console.log(store.getState());

store.subscribe(() => {
  document.getElementById("theValue").innerHTML = store.getState();

});


document.write("hello webpack mike");
window.decrement = function () {
  store.dispatch({ type: 'DECREMENT'});

}


window.increment = function increment () {
  store.dispatch({ type: 'INCREMENT'});

}


expect(counter(0, { type: 'INCREMENT' } )).toEqual(1);
