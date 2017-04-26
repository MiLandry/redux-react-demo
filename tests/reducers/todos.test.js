import chai from 'chai'; 
import todos from '../../reducers/todos';
import deepFreeze from 'deep-freeze';

const myTodo = {
  text: 'buy milk',
  completed: false
};


chai.should();

// todos([myTodo], {type: 'TOGGLE'}).should.equal(
//   {
//   text: 'buy milk',
//   completed: true
// });


  
describe('The Todos reducer', () => {
  it('can handle ADD_TODO actions', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id: 0,
      text: 'test'
    };
    const after = [
      {id: 0,
        text: 'test',
        completed: false
      }
    ];

    deepFreeze(before);
    deepFreeze(action);


    todos(stateBefore, action).should.equal(after);
    
  });
});

/*

//test initialization
todos(undefined, {}).should.equal([]);

//handle unknown type
todos([, {type: 'IPSUM_LOREM'}).should.equal(4);

*/