import chai from 'chai'; 
import visibilityFilter from '../../reducers/visibilityFilter';
import deepFreeze from 'deep-freeze';

// a model object just for reference, not used
const myFilter = 'SHOW_COMPLETED';

chai.should();

describe('The visibilityFilter reducer', () => {
  it('can handle CHANGE_VISIBILITY_FILTER actions', () => {
    const stateBefore = '';
    const action = {
      type: 'CHANGE_VISIBILITY_FILTER',
      filter: 'SHOW_ALL'
    };
    const after = 'SHOW_ALL';

    deepFreeze(before);
    deepFreeze(action);


    visibilityFilter(stateBefore, action).should.equal(after);
    
  });
});

/*

//test initialization
todos(undefined, {}).should.equal([]);

//handle unknown type
todos([, {type: 'IPSUM_LOREM'}).should.equal(4);

*/
