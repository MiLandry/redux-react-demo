import chai from 'chai'; 
import todos from '../../reducers/todos';
import deepFreeze from 'deep-freeze';

// a model object just for reference, not used
const myTodo = {
  id:0,
  text: 'buy milk',
  completed: false
};

chai.should();

describe('The Todos reducer', () => {
  it('can add todos (ADD_TODO action)', () => {
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


    todos(stateBefore, action).should.deep.equal(after);
    
  });

  it('can toggle todos (TOGGLE_TODO action)', () => {
    const stateBefore = [{
      id:0,
      text: 'test',
      completed: false
    }];
    const action = {
      type: 'TOGGLE_TODO',
      id: 0,
    };
    const after = [
      {id: 0,
        text: 'test',
        completed: true
      }
    ];

    deepFreeze(before);
    deepFreeze(action);


    todos(stateBefore, action).should.deep.equal(after);
    
  });
});

/*

//test initialization
todos(undefined, {}).should.equal([]);

//handle unknown type
todos([, {type: 'IPSUM_LOREM'}).should.equal(4);

*/