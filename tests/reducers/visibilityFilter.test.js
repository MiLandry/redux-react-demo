import chai from 'chai'; 
import visibilityFilter from '../../reducers/visibilityFilter';
import deepFreeze from 'deep-freeze';

chai.should();

describe('The visibilityFilter reducer', () => {
  it('can handle CHANGE_VISIBILITY_FILTER actions', () => {
    const before = '';
    const action = {
      type: 'CHANGE_VISIBILITY_FILTER',
      filter: 'SHOW_ALL'
    };
    const after = 'SHOW_ALL';

    deepFreeze(before);
    deepFreeze(action);


    visibilityFilter(before, action).should.equal(after);
    
  });
});
