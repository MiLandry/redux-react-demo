import chai from 'chai' 
import todo from '../../reducers/todo'
import deepFreeze from 'deep-freeze'


chai.should()

describe('The Todo reducer', () => {


  it('can toggle todos (TOGGLE_TODO action)', () => {
    const before = {
      id:0,
      text: 'test',
      completed: false
    }
    const action = {
      type: 'TOGGLE_TODO',
      id: 0,
    }
    const after = 
      {id: 0,
        text: 'test',
        completed: true
      }
   

    deepFreeze(before)
    deepFreeze(action)


    todo(before, action).should.deep.equal(after)
    
  })
})
