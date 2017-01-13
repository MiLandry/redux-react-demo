import { createStore } from 'redux';
import * as reducers from './reducers/reducers';



reducers.tests();
console.log("all tests pass")


const store = createStore(reducers.appReducer);

export default store;


